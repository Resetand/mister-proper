import { Message } from "node-telegram-bot-api";
import { sendMessageWithLogs } from "../helper";

export default async (message: Message) => {
    await sendMessageWithLogs(message.chat.id, 'Серега');
};
