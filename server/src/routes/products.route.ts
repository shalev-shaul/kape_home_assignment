import { getPriceByBundle } from './../controllers/products.controller';
import { Router } from 'express';
import { authenticate } from '../middlewares/authenticated';
export const router = Router();

router.get('/getPriceByBundle', authenticate, getPriceByBundle);
