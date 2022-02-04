import { getCustomRepository } from "typeorm";
import { IEmployee } from "../../interfaces/IEmployee";
import { EmployeeeRepository } from "../../repositories/EmployeeRepository";
import { existsOrError } from "../../ultils/validation";
import { cpf as cpfFunction } from 'cpf-cnpj-validator';
import { encryptPassword } from "../../ultils/utils";
import { CustomException } from "../../exceptions/CustomException";

export class CreateEmployeeService {
    async execute({ name, email, password, cpf, whatsapp, admin = false }: IEmployee) {
        const repository = getCustomRepository(EmployeeeRepository);

        existsOrError(name, 'Nome é necessário(a)!');
        existsOrError(email, 'E-mail é necessário(a)!');
        existsOrError(password, 'Senha é necessário(a)!');
        existsOrError(whatsapp, 'whatsapp é necessário(a)!');

        if (!cpfFunction.isValid(cpf)) throw new CustomException('CPF inválido');

        const newPassword = encryptPassword(password, 10);

        const employee = repository.create({
            name,
            email,
            password: newPassword,
            cpf,
            whatsapp,
            admin
        });

        await repository.save(employee);
    }
}