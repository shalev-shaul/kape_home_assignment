import 'reflect-metadata';
import APIRouter from './routes/main-route';
var cors = require('cors');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 3001;

// use it before all route definitions
app.use(cors({ origin: '*' }));

app.use('/api', APIRouter);
server.listen(port, () => {
  console.log(`Kape sever listening on port ${port}`);
});
