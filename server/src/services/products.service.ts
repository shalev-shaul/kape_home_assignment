import { readFile } from '../utils/read-files';
import { Product } from '../interfaces/product.interface';

export class ProductsService {
  constructor() {}

  public async getProductInfo(productName: string = '*', currency: string = 'usd'): Promise<Product[]> {
    var productsJson = await readFile('src/mocks/pricingMock.json');
    var products: Product[] = [];

    var currencyPerDollar = JSON.parse(await this.getPriceByCurrency(1, currency));
    var currencySymbol = currencyPerDollar.symbol;
    var currencyPricePerDollar = parseFloat(currencyPerDollar.amount);

    if (productName == '*') {
      for (const [bundleName, value] of Object.entries(productsJson['original'])) {
        let bundleOriginalPrice = parseFloat(value['USD']);
        let bundleDiscountPrice = parseFloat(productsJson['offers'][bundleName]['USD']);
        let product = await this.createProduct(
          bundleName,
          bundleOriginalPrice,
          bundleDiscountPrice,
          currencySymbol,
          currencyPricePerDollar
        );
        products.push(product);
      }

      let extendedBundleProducts = products.filter((product) => {
        return product.bundleName == 'essential' || product.bundleName == 'vpn_addon';
      });
      let extendedBundle: Product = await this.getCombinedBundle(
        'extended',
        extendedBundleProducts,
        currencySymbol,
        currencyPricePerDollar
      );
      products.push(extendedBundle);
      products = products.filter((p) => {
        return p.bundleName != 'vpn_addon';
      });
    } else {
      let bundleOriginalPrice = parseFloat(productsJson['original'][productName]['USD']);
      let bundleDiscountPrice = parseFloat(productsJson['offers'][productName]['USD']);
      let product = await this.createProduct(
        productName,
        bundleOriginalPrice,
        bundleDiscountPrice,
        currencySymbol,
        currencyPricePerDollar
      );
      products.push(product);
    }

    return products;
  }

  public async getCombinedBundle(
    newBundleName: string,
    products: Product[],
    currencySymbol,
    currencyPricePerDollar
  ): Promise<Product> {
    let bundleOriginalPrice = 0;
    let bundleDiscountPrice = 0;
    products.map((product) => {
      bundleOriginalPrice += product.originalPrice;
      bundleDiscountPrice += product.discountPrice;
    });
    return await this.createProduct(
      newBundleName,
      bundleOriginalPrice,
      bundleDiscountPrice,
      currencySymbol,
      currencyPricePerDollar
    );
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
    currencySymbol: string,
    currencyPerDollar: number
  ): Promise<Product> {
    let monthlyPrice = parseFloat((discountPrice / 12).toFixed(2));
    let discountPercentage = Math.floor((1 - discountPrice / originalPrice) * 100);
    let originalPriceFormat = `${currencySymbol}${this.getRoundedPrice(currencyPerDollar * originalPrice)}`;
    let discountPriceFormat = `${currencySymbol}${this.getRoundedPrice(currencyPerDollar * discountPrice)}`;
    let monthlyPriceFormat = `${currencySymbol}${this.getRoundedPrice(currencyPerDollar * monthlyPrice)}`;
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

  public getRoundedPrice(price: number) {
    if (price >= 0 && price <= 999) {
      return Math.round(price + 0.01) - 0.01;
    }
    if (price >= 1000 && price <= 9999) {
      return Math.ceil(price / 10) * 10;
    }
    return Math.ceil(price / 100) * 100;
  }
}
