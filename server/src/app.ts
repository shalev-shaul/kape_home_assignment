import 'reflect-metadata';
import APIRouter from './routes/main-route';
const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 3001;

server.listen(port, () => {
  console.log(`Kape sever listening on port ${port}`);
});

app.use('/api', APIRouter);
