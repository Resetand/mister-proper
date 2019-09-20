import { Request, Response, NextFunction } from 'express';
import { UpdateRequest } from '../types/tbot';



export const tbotCtx = (req: Request, res: Response, next: NextFunction) => {
    const data = req.body as UpdateRequest;


}