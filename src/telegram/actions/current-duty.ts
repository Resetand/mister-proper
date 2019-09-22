import { Message } from "node-telegram-bot-api";
import config from "../../config";
import { toUsername } from "../../lib/utils";
import { sendMessageWithLogs } from "../helper";

export default async (message: Message) => {
    const current = config.room.members.filter((x) => Boolean(x.isDuty))[0];
    const msg = `На этой неделе дежурит ${toUsername(current.username)}`;
    return await sendMessageWithLogs(message.chat.id, msg);
};
