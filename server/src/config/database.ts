import { Pool } from 'pg';
const { Client } = require('pg');
require('dotenv').config();

export const credential = {
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_DATABASE,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
};
process.env.DATABASE_USER;
const client = new Client(credential);

client.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

export default client;

export const pool = new Pool(credential);
