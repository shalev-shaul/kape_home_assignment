import { Router } from 'express';
import { router as ProductRoutes } from './products.route';
import { router as ActionsRoutes } from './actions.route';
import { router as AuthRoutes } from './auth.route';

const APIRouter = Router({ mergeParams: true });

APIRouter.use('/products', ProductRoutes);
APIRouter.use('/actions', ActionsRoutes);
APIRouter.use('/auth', AuthRoutes);

export default APIRouter;
