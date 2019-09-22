import { Message } from "node-telegram-bot-api";
import { getTBotIntent } from "../../megamind/intent";
import { Intent } from "../../megamind/intent/types";
import { log, sendMessageWithLogs } from "../helper";

import currentDuty from "../actions/current-duty";
import help from "../actions/help";
import schedule from "../actions/schedule";
import start from "../actions/start";
import unknow from "../actions/unknow";
import respons from "../actions/respons";

export default async (message: Message) => {
    log(message);

    const intent = getTBotIntent(message);
    if (intent === null) {
        return;
    }
    if (intent === Intent.StartMessage) {
        return start(message);
    }
    if (intent === Intent.HelpMessage) {
        return help(message);
    }
    if (intent === Intent.CurrentDuty) {
        return currentDuty(message);
    }
    if (intent === Intent.Schedule) {
        return schedule(message);
    }
    if (intent === Intent.Responsibility) {
        return respons(message);
    }

    if (intent === Intent.Unknow) {
        return unknow(message);
    }
};
