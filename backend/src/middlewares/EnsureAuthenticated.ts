import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

type IPayload = {
    id: number
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
        const authToken = req.headers.authorization;

        if (!authToken) return res.status(401).end();

        const [, token] = authToken.split(' ');

        const sub = verify(token, process.env.SECRET_KEY) as IPayload;

        req.user_id = sub.id;

        return next();
    } catch (error) {
        return res.status(401).end();
    }
}