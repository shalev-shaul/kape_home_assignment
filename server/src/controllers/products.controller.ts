import { Request, Response } from 'express';
import { pricingMock } from '../mocks/pricingMock';

export const getProducts = async (req: Request, res: Response) => {
  res.send('success');
};

export const getPriceByBundle = async (req: Request, res: Response) => {
  const products = pricingMock;

  res.send(req.query);
};
