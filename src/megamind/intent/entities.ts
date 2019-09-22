import { MessageEntity } from "node-telegram-bot-api";
import config from "../../config";
import { toUsername } from "../../lib/utils";
import { Command } from "./types";


export const hasEntities = (entities: MessageEntity[]) => entities && entities.length;

export const hasBotMention = (entities: MessageEntity[], text: string) => {
    const re = new RegExp(`^(${config.tbot.nicknames.join('|')})`, 'gi');
    return re.test(text) ? true : (entities && entities.some((x) =>
        x.type === 'mention'
        && toUsername(text.substr(x.offset, x.length)) === toUsername(config.tbot.botname),
    ));
};

export const getBotCommandList = (entities: MessageEntity[], text: string): string[] => {
    return (entities && entities.reduce((acc, x) => {
        if (x.type === 'bot_command') {
            const command = text.substr(x.offset, x.length);
            return [...acc, command];
        }
        return acc;
    }, []));
};


export const hasCommand = (entities: MessageEntity[]) => {
    return entities && entities.some((x) => x.type === 'bot_command');
};
