import { readFile } from '../utils/read-files';
import { Product } from '../interfaces/product.interface';
const db = require('../config/database');
import client, { credential } from '../config/database';
import { Pool } from 'pg';

export class ActionsService {
  constructor() {}

  public async createAction(action_name: string) {
    const date = new Date().toISOString();

    try {
      const pool = new Pool(credential);
      await pool.query(
        `INSERT INTO actions (action_name, date_created) VALUES ('${action_name ?? ''}', '${date}')`,
        (err, res) => {
          pool.end();
        }
      );
      return true;
    } catch (err) {
      return false;
    }
  }
}
