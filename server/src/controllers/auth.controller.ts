import { Request, Response } from 'express';
import client, { credential } from '../config/database';
import { Pool } from 'pg';
import { AuthService } from '../services/auth.service';

export const createJwtToken = async (req: Request, res: Response) => {
  const { name } = req.body;
  const authInstance = new AuthService();
  res.send(authInstance.createJWT({ name }));
};
