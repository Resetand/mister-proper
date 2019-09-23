
import TelegramBot = require('node-telegram-bot-api');
import groupChatCreated from './controllers/group-chat-created';
import leftChatMember from './controllers/left-chat-member';
import newChatMember from './controllers/new-chat-members';
import onText from './controllers/text';

export const eventSubscribe = (tbot: TelegramBot) => {
    tbot.on('group_chat_created', groupChatCreated);
    tbot.on('new_chat_members', newChatMember);
    tbot.on('left_chat_member', leftChatMember);
    tbot.on('text', onText);
};



