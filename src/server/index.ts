import http = require('http');
import config from "../config";
import { makeTBot } from '../telegram';
import app from "./app";

const server = http.createServer(app);
const port = config.ports.http;
export const tbot = makeTBot();

server.listen(port, async (err: Error) => {
    if (err) {
        console.error('Server startup failed');
        console.error(err);
        return;
    }
});


