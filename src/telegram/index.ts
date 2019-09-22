import TelegramBot = require("node-telegram-bot-api");
import config from "../config";
import { eventSubscribe } from "./subscriptions";

export const makeTBot = () => {
    const tbot = new TelegramBot(config.tbot.accessKey, { polling: true });
    eventSubscribe(tbot);
    return tbot;
};
