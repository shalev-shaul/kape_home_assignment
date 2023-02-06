import { Router } from 'express';
import { createJwtToken } from '../controllers/auth.controller';
import { createAction } from '../controllers/actions.controller';
export const router = Router();

router.post('/', createJwtToken);
