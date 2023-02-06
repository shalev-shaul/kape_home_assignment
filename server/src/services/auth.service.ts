import * as jwt from 'jsonwebtoken';
require('dotenv').config();
export class AuthService {
  constructor() {}

  createJWT(payload: { name: any }) {
    return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: process.env.JWT_TOKEN_EXPIRES });
  }
}
