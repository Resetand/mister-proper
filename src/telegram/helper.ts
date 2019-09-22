import * as c from 'colors';
import { Message, MessageEntity, SendMessageOptions } from "node-telegram-bot-api";
import { log as systemLog } from 'util';
import { tbot } from "../server";

const printEntities = (entities?: MessageEntity[]) => {
    if (!entities || !entities.length) {
        return '';
    }
    return "\n" + entities.map((en) => `${c.bold("-- ENTITY")}: ${c.bold(c.grey(JSON.stringify(en)))}`).join("\n");
};

export const log = (message: Message) => {
    const parts = [
        `[${c.bold(message.from.is_bot ? c.cyan("BOT") : c.yellow("USER"))}]`,
        `${c.bold("-- FROM")}: @${c.bold(c.green(message.from.username))} (${message.from.first_name} ${message.from.last_name})`,
        `${c.bold("-- CHAT")}: ${c.bold(c.gray(JSON.stringify(message.chat)))}`,
        `${c.bold("-- USER")}: ${c.bold(c.gray(JSON.stringify(message.from)))}`,
        printEntities(message.entities),
        `${c.bold("-- TEXT")}: ${c.bold(message.text)}`,
    ];
    systemLog("\n\n" + parts.filter(Boolean).join("\n") + "\n");
};

export type HOF = (handler: (message: Message) => any) => any;

export const withLogger = (message) => {
    log(message);
    return (handler: (message: Message) => any) => handler(message);
};

export const sendMessageWithLogs = async (chatId: string | number, text: string, options?: SendMessageOptions) => {
    const msg = await tbot.sendMessage(chatId, text, options);
    log(msg);
};
