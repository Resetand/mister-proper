import { MessageEntity } from "node-telegram-bot-api";
import config from "../../config";
import { toUsername } from "../utils";


export const hasEntities = (entities: MessageEntity[]) => entities && entities.length;

export const hasBotMention = (entities: MessageEntity[], text: string) => {
    const re = new RegExp(`(${config.tbot.nicknames.join('|')})`, 'gi');
    return re.test(text) ? true : (entities && entities.some((x) =>
        x.type === 'mention'
        && toUsername(text.substr(x.offset, x.length)) === toUsername(config.tbot.botname),
    ));
};

export const hasCommand = (entities: MessageEntity[]) => {
    return entities && entities.some((x) => x.type === 'bot_command');
};
