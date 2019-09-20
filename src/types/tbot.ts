import { Intent } from "./intent";

export interface User {
    id: number,
    first_name: string,
    last_name?: string,
    username?: string
}
export interface Chat {
    id: number,
    type: 'private' | 'group' | 'supergroup' | 'channel',
    title?: string,
    username?: string,
    first_name?: string,
    last_name?: string,
    all_members_are_administrators: boolean,
}

export enum BotCommand {
    Start = 'start',
}


export enum MessageEntityType {
    Mention = 'mention',
    Hashtag = 'hashtag',
    Bot_command = 'bot_command',
    Email = 'email',
    Bold = 'bold',
    Italic = 'italic',
    Code = 'code',
    Pre = 'pre',
    TextLink = 'text_link'
}

export interface MessageEntity {
    type: MessageEntityType,
    offset: number,
    length: number,
    url?: string,
}

export interface Message {
    message_id: number,
    from?: User,
    date: number,
    chat: Chat,
    forward_from: User,
    forward_date: number,
    reply_to_message: Message,
    text: string,

    entities?: MessageEntity[],

    contact?: string,
    caption?: string,

    new_chat_member?: User,
    left_chat_member?: User,
    new_chat_title?: string,

    supergroup_chat_created?: true,
    channel_chat_created?: true,

    new_chat_photo?: unknown,
    migrate_to_chat_id: unknown,
    migrate_from_chat_id: unknown,
    audio?: unknown,
    document?: unknown,
    sticker?: unknown,
    video?: unknown,
    voice?: unknown,
    venue?: unknown,
    pinned_message?: Message,
}

export interface UpdateRequest {
    update_id: number,
    message: Message,
    inline_query?: unknown,
    chosen_inline_result?: unknown,
    callback_query?: unknown,
}

export interface ResponseMessage {
    chat_id: string | number,
    text: string,
    parse_mode?: boolean,
    disable_web_page_preview?: boolean,
    disable_notification?: boolean,
    reply_to_message_id?: number,

    // TODO: Фишки с рисование дивов в ответе
    reply_markup?: unknown,
}
