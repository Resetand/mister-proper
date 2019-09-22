import { Message } from "node-telegram-bot-api";
import { getIntent } from "../../lib/intent";
import { Intent } from "../../lib/intent/types";
import { log, sendMessageWithLogs } from "../helper";

import currentDuty from "../actions/current-duty";
import help from "../actions/help";
import schedule from "../actions/schedule";
import start from "../actions/start";
import unknow from "../actions/unknow";

export default async (message: Message) => {
    log(message);

    const intent = getIntent(message);
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

    if (intent === Intent.Unknow) {
        return unknow(message);
    }
};
