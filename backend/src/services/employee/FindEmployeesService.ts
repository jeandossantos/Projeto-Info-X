import { getCustomRepository } from "typeorm";
import { EmployeeeRepository } from "../../repositories/EmployeeRepository";

export class FindEmployeesService {
    async execute() {
        const repository = getCustomRepository(EmployeeeRepository);

        const employees = await repository.find();

        return employees;
    }
}