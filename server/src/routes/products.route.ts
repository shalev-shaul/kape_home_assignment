import { getPriceByBundle } from './../controllers/products.controller';
import { Router } from 'express';
export const router = Router();

//router.get('/test', testa);
router.get('/getPriceByBundle', getPriceByBundle);
