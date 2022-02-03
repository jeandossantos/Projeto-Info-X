import { getCustomRepository } from "typeorm";
import { IEmployee } from "../../interfaces/IEmployee";
import { EmployeeeRepository } from "../../repositories/EmployeeRepository";

export class UpdateEmployeeService {
    async execute({ id, name, email, password, cpf, whatsapp, admin }: IEmployee) {
        const repository = getCustomRepository(EmployeeeRepository);

        const employee = repository.create({
            id,
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