import { Message } from "node-telegram-bot-api";
import { sendMessageWithLogs } from "../helper";
import help from "./help";

export default async (message: Message) => {
    await sendMessageWithLogs(message.chat.id, 'Ты охуел? давай по русски:');
    await help(message);
};
