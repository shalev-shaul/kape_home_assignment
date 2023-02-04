import { getProducts, getPriceByBundle } from './../controllers/products.controller';
import { Router } from 'express';
export const router = Router();

router.get('/', getProducts);
router.get('/getPriceByBundle', getPriceByBundle);
