import { ResponseMessage, User } from "../../types/tbot";
import config from "../../config";
import axios from 'axios';
import { IncomingMessage } from "http";
import { toUsername } from "../utils";
import { isString } from "util";


const api = axios.create({
    baseURL: `${config.tbot.url}/bot${config.tbot.accessKey}/`,
});



export const getMe = async (message: ResponseMessage) => {
    const res = await api('getMe');
    return res.data as unknown as User;
}

export const sendMessage = async (message: ResponseMessage) => {
    const res = await api.post('sendMessage');
    return res.data as IncomingMessage
}

export const sendText = async (text: string, chatId: string | number) => {
    return await sendMessage({
        chat_id: isString(chatId) ? toUsername(chatId) : chatId,
        text,
    });
}

export const setWebhook = async (certificate: Buffer) => {
    axios.post('setWebhook', {
        url: config.tbot.webhook,
        certificate
    })
}