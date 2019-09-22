import http = require('http');
import config from "../config";
import app from "./app";
import { makeTBot } from '../telegram';

const server = http.createServer(app);
const port = config.ports.http;

server.listen(port, async (err: Error) => {
    if (err) {
        console.error('Server startup failed');
        console.error(err);
        return;
    }
});

export const tbot = makeTBot()

