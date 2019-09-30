import { Message } from "node-telegram-bot-api";
import { createIncludeRe, toBotCommand } from "../../lib/utils";
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


const {
    ShoppingList,
    AddToShoppingList,
    RemoveFromShoppingList,
    CurrentDuty,
    CreateSchedule,
    Responsibility,
    AddDuty,
    Schedule,
    HelpMessage,
    StartMessage,
    Unknow,
    RemoveDuty,
} = Intent;


const rules: Record<Intent, RegExp[]> = {
    [CreateSchedule]: [createIncludeRe('создай', 'сформируй')],
    [CurrentDuty]: [createIncludeRe('дежурный', 'дежурит', 'кто', 'сейчас', 'на этой', 'неделе', 'убирается')],
    [Responsibility]: [createIncludeRe('обязанности', 'должен')],
    [Schedule]: [createIncludeRe('дежурные', 'список', 'покажи', 'дай')],
    [AddDuty]: [createIncludeRe('добавь пользователя')],
    [RemoveDuty]: [createIncludeRe('удали пользователя')],
    [HelpMessage]: [createIncludeRe('помоги')],
    [ShoppingList]: [createIncludeRe('список покупок', 'химия', 'химию', 'бытовую')],
    [StartMessage]: [createIncludeRe('привет')],
    [AddToShoppingList]: [createIncludeRe('добавь')],
    [RemoveFromShoppingList]: [createIncludeRe('удали')],
    [Unknow]: [/.*/],
};

const getInentByCommand = (command: string): Intent => {
    command = toBotCommand(command).slice(1);
    return Boolean(commandIntentMap[command]) ? commandIntentMap[command] : Intent.Unknow;
};

export const getTextIntent = (text: string): Intent | null => {
    for (const intent of Object.keys(rules)) {
        if (rules[intent].some(re => re.test(text))) {
            return intent as Intent;
        }
    }
};

export const getTBotIntent = ({ entities, text, chat }: Message): Intent | null => {
    if (hasEntities(entities)) {
        const commandList = getBotCommandList(entities, text);
        if (Boolean(commandList.length)) {
            return getInentByCommand(commandList[0]);
        }
    }
    if (chat.type !== 'private' && !hasBotMention(entities, text)) {
        return null;
    }
    return getTextIntent(text);
};
