

import * as express from "express";
import { json, urlencoded } from "body-parser";
import morgan = require('morgan');

const app = express();

app.get('/ping', (req, res) => res.send('pong'));

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('combined'))

const router = express.Router();


app.use('/', router);

export default app;

