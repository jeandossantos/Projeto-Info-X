import { getCustomRepository } from "typeorm";
import { IEmployee } from "../../interfaces/IEmployee";
import { EmployeeeRepository } from "../../repositories/EmployeeRepository";

export class CreateEmployeeService {
    async execute({ name, email, password, cpf, whatsapp, admin }: IEmployee) {
        const repository = getCustomRepository(EmployeeeRepository);

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