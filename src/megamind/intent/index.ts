import { Message } from "node-telegram-bot-api";
import { hasBotMention, hasCommand, hasEntities } from "./entities";
import { Command, Intent } from "./types";


const commandMap: Record<Command, Intent> = {
    [Command.Start]: Intent.StartMessage,
    [Command.Shedule]: Intent.Schedule,
    [Command.Current]: Intent.CurrentDuty,
    [Command.Create]: Intent.CreateSchedule,
    [Command.Respons]: Intent.Responsibility,
    [Command.Help]: Intent.HelpMessage,
};

const rulesMap = new Map([
    [/\дежурный/gi, Intent.CurrentDuty],
    [/\кто/gi, Intent.CurrentDuty],
    [/\дежурные/gi, Intent.Schedule],
    [/\список/gi, Intent.Schedule],
    [/\добавь/gi, Intent.AddDuty],
    [/\w*/gi, Intent.Unknow],
]);


const getCommandInent = (command: string): Intent => {
    command = command.slice(1);
    return Boolean(commandMap[command]) ? commandMap[command] : Intent.Unknow;
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
        if (hasCommand(entities)) {
            return getCommandInent(text);
        }
    }
    if (!hasBotMention(entities, text)) {
        return null;
    }
    return getTextIntent(text);
};
