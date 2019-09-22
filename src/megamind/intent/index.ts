import { Message } from "node-telegram-bot-api";
import { log } from "util";
import { toBotCommand } from "../../lib/utils";
import { getBotCommandList, hasBotMention, hasEntities } from "./entities";
import { Command, Intent } from "./types";


export const commandIntentMap: Record<Command, Intent> = {
    [Command.Start]: Intent.StartMessage,
    [Command.Shedule]: Intent.Schedule,
    [Command.Current]: Intent.CurrentDuty,
    [Command.Create]: Intent.CreateSchedule,
    [Command.Respons]: Intent.Responsibility,
    [Command.Help]: Intent.HelpMessage,
};

const rulesMap = new Map([
    [/создай/i, Intent.CreateSchedule],
    [/дежурный/i, Intent.CurrentDuty],
    [/дежурит/i, Intent.CurrentDuty],
    [/должен/i, Intent.Responsibility],
    [/обязанности/i, Intent.Responsibility],
    [/кто/i, Intent.CurrentDuty],
    [/сейчас/i, Intent.CurrentDuty],
    [/дежурные/i, Intent.Schedule],
    [/список/i, Intent.Schedule],
    [/добавь/i, Intent.AddDuty],
    [/\.*/i, Intent.Unknow],
]);


const getInentByCommand = (command: string): Intent => {
    command = toBotCommand(command).slice(1);
    return Boolean(commandIntentMap[command]) ? commandIntentMap[command] : Intent.Unknow;
};

export const getTextIntent = (text: string): Intent | null => {
    for (const [re, intent] of rulesMap.entries()) {
        if (re.test(text)) {
            return intent;
        }
    }
};

export const getTBotIntent = ({ entities, text }: Message): Intent | null => {
    if (hasEntities(entities)) {
        const commandList = getBotCommandList(entities, text);
        log(JSON.stringify(commandList));
        if (Boolean(commandList.length)) {
            return getInentByCommand(commandList[0]);
        }
    }
    if (!hasBotMention(entities, text)) {
        return null;
    }
    return getTextIntent(text);
};
