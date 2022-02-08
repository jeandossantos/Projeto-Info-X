import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { Employee } from "../../entities/Employee";
import { EmployeeeRepository } from "../../repositories/EmployeeRepository";

export class FindEmployeesService {
    async execute() {
        const repository = getCustomRepository(EmployeeeRepository);

        const employees = await repository.find();

        return instanceToPlain(employees);
    }
}