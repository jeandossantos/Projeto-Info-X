import { getCustomRepository } from "typeorm";
import { ICustomer } from "../../interfaces/ICustomer";
import { CustomerRepository } from "../../repositories/CustomerRepository";

export class CreateCustomerService {
    async execute({ name, email, cpf, whatsapp }: ICustomer) {
        const repository = getCustomRepository(CustomerRepository);

        const customer = repository.create({
            name,
            email,
            cpf,
            whatsapp
        });

        await repository.save(customer);
    }
}