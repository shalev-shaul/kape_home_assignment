import { Router } from 'express';
import { authenticate } from '../middlewares/authenticated';
import { createAction } from '../controllers/actions.controller';
export const router = Router();

router.post('/', authenticate, createAction);
