import { Message } from "node-telegram-bot-api";
import config from "../../config";
import { sendMessageWithLogs } from "../helper";

export default async (message: Message) => {
    const members = config.__room.members;
    const parts = [
        '***Вот список дежурных:*** \n',
        ...members.map((mem) => `${mem.isDuty ? '🐵' : '🙈'} *** ${mem.username} *** `),
    ];
    return await sendMessageWithLogs(message.chat.id, parts.join('\n'), { parse_mode: 'Markdown' });
};
