import * as jwt from 'jsonwebtoken';
require('dotenv').config();

export const authenticate = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ error: 'No authorization token' });
  }

  try {
    const decoded = jwt.verify(authorization, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
