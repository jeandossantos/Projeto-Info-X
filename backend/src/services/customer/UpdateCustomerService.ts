import { getCustomRepository } from "typeorm";
import { ICustomer } from "../interfaces/ICustomer";
import { CustomerRepository } from "../repositories/CustomerRepository";

export class UpdateCustomerService {
    async execute({ id, name, email, cpf, whatsapp }: ICustomer) {
        const repository = getCustomRepository(CustomerRepository);

        const customer = await repository.create({
            id,
            name,
            email,
            cpf,
            whatsapp
        });

        await repository.save(customer);
    }
}