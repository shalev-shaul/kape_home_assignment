import { Request, Response } from 'express';
import client, { credential } from '../config/database';
import { Pool } from 'pg';
import { ActionsService } from '../services/actions.service';

export const createAction = async (req: Request, res: Response) => {
  const { action_name } = req.body;

  let actionInstance = new ActionsService();
  let createAction = await actionInstance.createAction(action_name);

  res.send(createAction);
};
