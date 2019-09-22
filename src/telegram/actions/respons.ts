import { Message } from "node-telegram-bot-api";
import config from "../../config";
import { toUsername } from "../../lib/utils";
import { sendMessageWithLogs } from "../helper";

export default async (message: Message) => {
    const current = config.room.members.filter((m) => Boolean(m.isDuty))[0];
    const parts = [
        `${toUsername(current.username)}, вот что надо сделать:`,
        '1. Подмести и помыть полы в своей в комнате, коридоре, на кухне, в ванной ',
        '2. Почистить туалет (ну или хотя бы залить его средством)',
        '3. Убрать свое место',
        '4. Вынести весь мусор',
    ];
    await sendMessageWithLogs(message.chat.id, parts.join('\n'), { parse_mode: 'Markdown' });
};
