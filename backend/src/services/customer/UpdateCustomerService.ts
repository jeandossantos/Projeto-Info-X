import { getCustomRepository } from "typeorm";

import { ICustomer } from "../../interfaces/ICustomer";
import { CustomerRepository } from "../../repositories/CustomerRepository";
import { existsOrError } from "../../ultils/validation";

export class UpdateCustomerService {
    async execute({ id, name, email, cpf, whatsapp }: ICustomer) {
        const repository = getCustomRepository(CustomerRepository);

        existsOrError(name, 'Nome é necessário(a)!');
        existsOrError(email, 'E-mail é necessário(a)!');
        existsOrError(cpf, 'CPF é necessário(a)!');
        existsOrError(whatsapp, 'Whatsapp é necessário(a)!');

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