import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {

    const { user_id } = req;

    const userRepository = getCustomRepository(UserRepository);

    const { admin } = await userRepository.findOne(user_id);

    if (admin) {
        return next()
    }

    res.status(401).send('Unauthorized');
}