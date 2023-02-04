import { Router } from 'express';
import { router as ProductRoutes } from './products.route';

const APIRouter = Router({ mergeParams: true });

APIRouter.use('/products', ProductRoutes);

export default APIRouter;
