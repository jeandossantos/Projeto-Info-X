import { getCustomRepository } from "typeorm";
import { CustomerRepository } from "../../repositories/CustomerRepository";

export class FindCustomerService {
    async execute() {
        const repository = getCustomRepository(CustomerRepository);
        const customers = await repository.find();

        return customers;
    }
}