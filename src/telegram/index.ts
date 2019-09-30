import TelegramBot = require("node-telegram-bot-api");
import config, { env } from "../config";
import { eventSubscribe } from "./subscriptions";

export const makeTBot = () => {
    const isProduction = env === 'production';
    const token = config.tbot.accessKey;
    let tbot: TelegramBot;

    if (isProduction) {
        const port = Number(process.env.PORT) || 3000;
        tbot = new TelegramBot(token, {
            webHook: { port },
        });
        const url = process.env.APP_URL || config.heroku.appUrl;
        tbot.setWebHook(`${url}/bot${token}`);

    } else {
        tbot = new TelegramBot(token, { polling: true });
    }
    eventSubscribe(tbot);
    return tbot;
};
