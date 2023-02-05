import { readFile } from '../utils/read-files';
import { Product } from '../interfaces/product.interface';

export class ProductsService {
  constructor() {}

  public async getProductInfo(productName: string = '*', currency: string = 'usd'): Promise<Product[]> {
    var productsJson = await readFile('src/mocks/pricingMock.json');
    var products: Product[] = [];

    if (productName == '*') {
      for (const [bundleName, value] of Object.entries(productsJson['original'])) {
        let bundleOriginalPrice = parseFloat(value['USD']);
        let bundleDiscountPrice = parseFloat(productsJson['offers'][bundleName]['USD']);
        let product = await this.createProduct(bundleName, bundleOriginalPrice, bundleDiscountPrice, currency);
        products.push(product);
      }

      let extendedBundleProducts = products.filter((product) => {
        return product.bundleName == 'essential' || product.bundleName == 'vpn_addon';
      });
      let extendedBundle: Product = await this.getCombinedBundle('extended', extendedBundleProducts, currency);
      products.push(extendedBundle);
      products = products.filter((p) => {
        return p.bundleName != 'vpn_addon';
      });
    } else {
      let bundleOriginalPrice = parseFloat(productsJson['original'][productName]['USD']);
      let bundleDiscountPrice = parseFloat(productsJson['offers'][productName]['USD']);
      let product = await this.createProduct(productName, bundleOriginalPrice, bundleDiscountPrice, currency);
      products.push(product);
    }

    return products;
  }

  public async getCombinedBundle(newBundleName: string, products: Product[], currency: string): Promise<Product> {
    let bundleOriginalPrice = 0;
    let bundleDiscountPrice = 0;
    products.map((product) => {
      bundleOriginalPrice += product.originalPrice;
      bundleDiscountPrice += product.discountPrice;
    });
    return await this.createProduct(newBundleName, bundleOriginalPrice, bundleDiscountPrice, currency);
  }

  public async getPriceByCurrency(amount: number, currency: string): Promise<string> {
    var spawn = require('child_process').spawn;

    var process = spawn('php', ['src/priceConverter.php', amount, currency]);
    var price: string = '';
    for await (const priceFormat of process.stdout) {
      price = priceFormat.toString();
    }
    return price;
  }

  public async createProduct(
    bundleName: string,
    originalPrice: number,
    discountPrice: number,
    currency: string
  ): Promise<Product> {
    let monthlyPrice = parseFloat((discountPrice / 12).toFixed(2));
    let discountPercentage = Math.floor((1 - discountPrice / originalPrice) * 100);
    let originalPriceFormat = await this.getPriceByCurrency(originalPrice, currency);
    let discountPriceFormat = await this.getPriceByCurrency(discountPrice, currency);
    let monthlyPriceFormat = await this.getPriceByCurrency(monthlyPrice, currency);
    return {
      bundleName,
      originalPrice,
      discountPrice,
      discountPercentage,
      monthlyPrice,
      pricesFormat: {
        originalPrice: originalPriceFormat,
        discountPrice: discountPriceFormat,
        monthlyPrice: monthlyPriceFormat,
      },
    };
  }
}
