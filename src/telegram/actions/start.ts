import { Message } from "node-telegram-bot-api";
import { tbot } from "../../server";
import { sendMessageWithLogs } from "../helper";
import help from "./help";

export default async (message: Message) => {
    const welcome = `Привет, вот что я умею:`;
    await sendMessageWithLogs(message.chat.id, `Привет, вот что я умею:`);
    await help(message);
    // const desc = `Я целый день писал сисетму интентов, так что вполне возможно я по`;
};
