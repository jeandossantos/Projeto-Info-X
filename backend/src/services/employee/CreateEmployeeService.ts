import { getCustomRepository } from "typeorm";
import { IEmployee } from "../../interfaces/IEmployee";
import { EmployeeeRepository } from "../../repositories/EmployeeRepository";
import { existsOrError } from "../../ultils/validation";

export class CreateEmployeeService {
    async execute({ name, email, password, cpf, whatsapp, admin }: IEmployee) {
        const repository = getCustomRepository(EmployeeeRepository);

        existsOrError(name, 'Nome é necessário(a)!');
        existsOrError(email, 'E-mail é necessário(a)!');
        existsOrError(password, 'Senha é necessário(a)!');
        existsOrError(cpf, 'CPF é necessário(a)!');
        existsOrError(whatsapp, 'whatsapp é necessário(a)!');

        const employee = repository.create({
            name,
            email,
            password,
            cpf,
            whatsapp,
            admin
        });

        await repository.save(employee);
    }
}