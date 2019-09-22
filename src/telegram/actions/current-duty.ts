import { Message } from "node-telegram-bot-api";
import config from "../../config";
import { toUsername } from "../../lib/utils";
import { sendMessageWithLogs } from "../helper";

export default async (message: Message) => {
    const current = config.room.members.filter((x) => Boolean(x.isDuty))[0];
    const msg = `На этой неделе дежурит ${current.name} ${toUsername(current.username)}. Напомнить что дожен сделать /respons `;
    await sendMessageWithLogs(message.chat.id, msg);
};
