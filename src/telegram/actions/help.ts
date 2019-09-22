import { Message } from "node-telegram-bot-api";
import { sendMessageWithLogs } from "../helper";

export default async (message: Message) => {
    const skills = [
        '/shedule - показать график дежурств',
        '/current - текущий дежурный',
        '/respons - что входит в обязанности',
        '/help - спискок команд',
    ];
    await sendMessageWithLogs(message.chat.id, skills.join('\n'));
};
