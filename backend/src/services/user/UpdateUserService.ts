import { getCustomRepository } from "typeorm";
import { CustomException } from "../../exceptions/CustomException";

import { IUser } from "../../interfaces/IUser";
import { UserRepository } from "../../repositories/UserRepository";
import { existsOrError } from "../../ultils/validation";
import { cpf as cpfFunction } from "cpf-cnpj-validator";
import { encryptPassword } from "../../ultils/utils";

export class UpdateUserService {
    async execute({ id, name, email, password, cpf, whatsapp, admin = false }: IUser) {
        const repository = getCustomRepository(UserRepository);

        existsOrError(name, 'Nome é necessário(a)!');
        existsOrError(email, 'E-mail é necessário(a)!');
        existsOrError(password, 'Senha é necessário(a)!');
        existsOrError(whatsapp, 'whatsapp é necessário(a)!');

        if (!cpfFunction.isValid(cpf)) throw new CustomException('CPF inválido');

        const newPassword = encryptPassword(password, 10);

        const user = repository.create({
            id,
            name,
            email,
            password: newPassword,
            cpf,
            whatsapp,
            admin
        });

        await repository.save(user);
    }
}