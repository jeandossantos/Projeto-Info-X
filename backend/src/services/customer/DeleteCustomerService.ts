import { getCustomRepository } from "typeorm";
import { CustomerRepository } from "../../repositories/CustomerRepository";

export class DeleteCustomerService {
    async execute(id: number) {
        const repository = getCustomRepository(CustomerRepository);

        await repository.delete(id);
    }
}