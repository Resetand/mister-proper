import { Message } from "node-telegram-bot-api";
import { log } from "../helper";

export default (message: Message) => {
    log(message);
};
