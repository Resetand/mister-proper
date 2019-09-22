import { Message } from "node-telegram-bot-api";
import { tbot } from "../../server";
import { sendMessageWithLogs } from "../helper";

export default async (message: Message) => {
    const welcome = `Привет, вот что я умею:`;
    await sendMessageWithLogs(message.chat.id, `Привет, вот что я умею:`);
    const skills = [
        '/shedule - показать график дежурств',
        '/current - текущий дежурный',
        '/respons - что входит в обязанности',
        '/help - что входит в обязанности',
    ];
    await sendMessageWithLogs(message.chat.id, skills.join('\n'));
    const desc = `Я целый день писал сисетму интентов, так что вполне возможно я по`;
};
