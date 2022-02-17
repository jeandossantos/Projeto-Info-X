import { getCustomRepository } from "typeorm";
import { IUser } from "../../interfaces/IUser";
import { UserRepository } from "../../repositories/UserRepository";
import { equalsOrError, existsOrError, notExistsOrError } from "../../ultils/validation";
import { cpf as cpfFunction } from 'cpf-cnpj-validator';
import { encryptPassword } from "../../ultils/utils";
import { CustomException } from "../../exceptions/CustomException";

export class CreateUserService {
    async execute({ name, email, password, confirmPassword, cpf, whatsapp, admin = false }: IUser) {
        const repository = getCustomRepository(UserRepository);

        existsOrError(name, 'Nome é necessário(a)!');
        existsOrError(email, 'E-mail é necessário(a)!');
        existsOrError(password, 'Senha é necessário(a)!');
        existsOrError(whatsapp, 'whatsapp é necessário(a)!');
        equalsOrError(password, confirmPassword, 'Senhas não coincidem!');

        if (!cpfFunction.isValid(cpf)) throw new CustomException('CPF inválido');

        const userFromDB = await repository.findOne({ email });

        notExistsOrError(userFromDB, 'Usuário já existente.');

        const newPassword = encryptPassword(password, 10);

        const user = repository.create({
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