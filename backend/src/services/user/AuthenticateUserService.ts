import { getCustomRepository } from "typeorm";
import { compareSync } from "bcryptjs";
import { sign } from 'jsonwebtoken';

import { existsOrError } from "../../ultils/validation";
import { UserRepository } from "../../repositories/UserRepository";
import { CustomException } from "../../exceptions/CustomException";

export class AuthenticateUserService {
    async execute(email: string, password: string) {
        const repository = getCustomRepository(UserRepository);

        const user = await repository.findOne({ email });

        existsOrError(user, 'Email/Password incorrect');

        const isMatch = compareSync(password, user.password);

        if (!isMatch) throw new CustomException('Email/Password incorrect');

        const token = sign({ id: user.id, name: user.email }, process.env.SECRET_KEY, {
            expiresIn: '1d'
        });

        return {
            id: user.id,
            name: user.name,
            admin: user.admin,
            token
        };
    }
}