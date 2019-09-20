import * as express from "express";
import { json, urlencoded } from "body-parser";
import { createServer as createHttpsServer } from 'https';
import { createServer as createHttpServer } from 'https';
import config from "../config";
import routes from "../routes";
import { setWebhook } from "../lib/tbot/api";
import * as fs from 'fs';
import * as path from 'path'

const app = express();

app.get('/ping', (req, res) => res.send('pong'));

const sslPublic = fs.readFileSync(path.resolve('PUBLIC.pem'));
const sslPrivate = fs.readFileSync(path.resolve('PRIVATE.key'));

// FIXME
const http = createHttpServer({}, app);
const https = createHttpsServer({
    key: sslPrivate,
    cert: sslPublic
}, app);


const printWelcome = (text) => {
    return () => console.log(text);
}

app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/*', routes);

// app.listen(config.ports.http, printWelcome(`https server listening on ${config.ports.http}`));


setWebhook(sslPublic)


http.listen(config.ports.http, printWelcome(`http server listening on ${config.ports.http}`));
https.listen(config.ports.https, printWelcome(`https server listening on ${config.ports.https}`));
