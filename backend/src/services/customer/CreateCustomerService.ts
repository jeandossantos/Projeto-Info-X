import { getCustomRepository } from "typeorm";
import { ICustomer } from "../../interfaces/ICustomer";
import { CustomerRepository } from "../../repositories/CustomerRepository";
import { existsOrError } from "../../ultils/validation";

export class CreateCustomerService {
    async execute({ name, email, cpf, whatsapp }: ICustomer) {
        const repository = getCustomRepository(CustomerRepository);

        existsOrError(name, 'Nome é necessário(a)!');
        existsOrError(email, 'E-mail é necessário(a)!');
        existsOrError(cpf, 'CPF é necessário(a)!');
        existsOrError(whatsapp, 'Whatsapp é necessário(a)!');

        const customer = repository.create({
            name,
            email,
            cpf,
            whatsapp
        });

        await repository.save(customer);
    }
}