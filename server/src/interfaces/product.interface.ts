export interface Product {
  bundleName: string;
  originalPrice: number;
  discountPrice: number;
  monthlyPrice: number;
  pricesFormat: {
    originalPrice: string;
    discountPrice: string;
    monthlyPrice: string;
  };
  discountPercentage: number;
}
