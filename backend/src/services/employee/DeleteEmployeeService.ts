import { getCustomRepository } from "typeorm";
import { EmployeeeRepository } from "../../repositories/EmployeeRepository";

export class DeleteEmployeeService {
    async execute(id: number) {
        const repository = getCustomRepository(EmployeeeRepository);

        const employee = await repository.findOne(id);

        if (!employee) return;

        await repository.delete(employee);
    }
}