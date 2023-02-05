import { Request, Response } from 'express';
import { ProductsService } from '../services/products.service';

export const getPriceByBundle = async (req: Request, res: Response) => {
  const productInstance = new ProductsService();
  let json = await productInstance.getProductInfo(req.query.bundle as string, req.query.currency as string);
  console.log(json);
  res.send(json);
};
