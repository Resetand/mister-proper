import { Message } from "node-telegram-bot-api";
import config from "../../config";
import { toUsername } from "../../lib/utils";
import { sendMessageWithLogs } from "../helper";

export default async (message: Message) => {
    const members = config.room.members;
    const parts = [
        '***Вот список дежурных:*** \n',
        ...members.map((mem) => `${mem.isDuty ? '🌝' : '🌚'}  ** ${mem.name} ** - ${toUsername(mem.username)} `),
    ];
    return await sendMessageWithLogs(message.chat.id, parts.join('\n'),
        { parse_mode: 'Markdown', disable_notification: true });
};
