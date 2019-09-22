import { Message } from "node-telegram-bot-api";
import { log } from "../helper";

const handler = (message: Message) => {
    log(message);
};

export default handler;
