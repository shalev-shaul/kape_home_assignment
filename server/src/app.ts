import 'reflect-metadata';
import APIRouter from './routes/main-route';
import { AuthService } from './services/auth.service';
var cors = require('cors');
const express = require('express');
const app = express();
const server = require('http').Server(app);
var bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

// use it before all route definitions
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/api', APIRouter);

server.listen(port, () => {
  console.log(`Kape sever listening on port ${port}`);
});
