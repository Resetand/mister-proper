
import onText from './controllers/text'
import newChatMember from './controllers/new-chat-members'
import leftChatMember from './controllers/left-chat-member'
import groupChatCreated from './controllers/group-chat-created'
import TelegramBot = require('node-telegram-bot-api')

export const eventSubscribe = (tbot: TelegramBot) => {
    tbot.on('group_chat_created', groupChatCreated)
    tbot.on('new_chat_members', newChatMember)
    tbot.on('left_chat_member', leftChatMember)
    tbot.on('text', onText);
}



