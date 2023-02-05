import { readFile } from '../utils/read-files';
import { Product } from '../interfaces/product.interface';

export class ProductsService {
  constructor() {}

  public async getProductInfo(productName: string = '*', currency: string = 'usd'): Promise<Product[]> {
    var productsJson = await readFile('src/mocks/pricingMock.json');
    let products: Product[] = [];

    if (productName == '*') {
      Object.entries(productsJson['original']).forEach(([bundleName, value]) => {
        let bundleOriginalPrice: number = parseFloat(value['USD']);
        let bundleDiscountPrice: number = parseFloat(productsJson['offers'][bundleName]['USD']);
        let monthlyPrice: number = parseFloat((bundleDiscountPrice / 12).toFixed(2));
        let discountPercentage = Math.floor((1 - bundleDiscountPrice / bundleOriginalPrice) * 100);
        products.push({
          bundleName,
          discountPercentage,
          discountPrice: bundleDiscountPrice,
          monthlyPrice,
          originalPrice: bundleOriginalPrice,
        });
      });
      let extendedBundleProducts = products.filter((product) => {
        return product.bundleName == 'essential' || product.bundleName == 'vpn_addon';
      });
      let extendedBundle: Product = this.getCombinedBundle('extended', extendedBundleProducts);
      products.push(extendedBundle);
    } else {
      let bundleOriginalPrice: number = parseFloat(productsJson['original'][productName]['USD']);
      let bundleDiscountPrice: number = parseFloat(productsJson['offers'][productName]['USD']);
      let monthlyPrice: number = parseFloat((bundleDiscountPrice / 12).toFixed(2));
      let discountPercentage = Math.floor((1 - bundleDiscountPrice / bundleOriginalPrice) * 100);
      products.push({
        bundleName: productName,
        discountPercentage,
        discountPrice: bundleDiscountPrice,
        monthlyPrice,
        originalPrice: bundleOriginalPrice,
      });
    }

    return products;
  }

  public getCombinedBundle(newBundleName: string, products: Product[]): Product {
    let bundleOriginalPrice = 0;
    let bundleDiscountPrice = 0;
    products.map((product) => {
      bundleOriginalPrice += product.originalPrice;
      bundleDiscountPrice += product.discountPrice;
    });
    let monthlyPrice = parseFloat((bundleDiscountPrice / 12).toFixed(2));
    let discountPercentage = Math.floor((1 - bundleDiscountPrice / bundleOriginalPrice) * 100);
    return {
      bundleName: newBundleName,
      originalPrice: bundleOriginalPrice,
      discountPrice: bundleDiscountPrice,
      discountPercentage,
      monthlyPrice,
    };
  }
}
