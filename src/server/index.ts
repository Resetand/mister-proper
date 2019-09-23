import * as noSleep from 'heroku-nosleep';
import http = require('http');
import config from "../config";
import { makeTBot } from '../telegram';
import app from "./app";

// https://www.npmjs.com/package/heroku-nosleep
// For unable heroku inactive sleep


const server = http.createServer(app);
const port = process.env.PORT || 4000;
export const tbot = makeTBot();


server.listen(port, async (err: Error) => {
    noSleep(`${config.heroku.appUrl}/ping`);
});


