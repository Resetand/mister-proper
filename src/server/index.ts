import * as noSleep from 'heroku-nosleep';
import http = require('http');
import config from "../config";
import { makeTBot } from '../telegram';
import app from "./app";
const server = http.createServer(app);
const port = process.env.PORT || 4000;
export const tbot = makeTBot();

// https://www.npmjs.com/package/heroku-nosleep
// For unable heroku inactive sleep

noSleep(`${config.heroku.appUrl}/ping`);

server.listen(port, async (err: Error) => {
    if (err) {
        console.error('Server startup failed');
        console.error(err);
        return;
    }
});


