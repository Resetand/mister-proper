import { Request, Response } from "express-serve-static-core";
import { UpdateRequest, MessageEntityType } from "../types/tbot";
import tbotApi from '../lib/tbot'

export const tbotController = async (req: Request, res: Response) => {
    const { message } = req.body as UpdateRequest;
    const r = await tbotApi.sendMessage(message.chat.id, 'hello')
    res.end()
}