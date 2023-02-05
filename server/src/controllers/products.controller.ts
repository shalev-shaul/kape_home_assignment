import { Request, Response } from 'express';
import { ProductsService } from '../services/products.service';
import { Container } from 'typedi';

export const getProducts = async (req: Request, res: Response) => {
  res.send('success');
};

export const getPriceByBundle = async (req: Request, res: Response) => {
  const productInstance = new ProductsService();
  let json = await productInstance.getProductInfo(req.query.bundle as string, req.query.currency as string);
  console.log(json);
  res.send(json);
};
