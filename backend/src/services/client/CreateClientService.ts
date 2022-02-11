import { getCustomRepository } from "typeorm";
import { IClient } from "../../interfaces/IClient";
import { ClientRepository } from "../../repositories/ClientRepository";
import { existsOrError, notExistsOrError } from "../../ultils/validation";

export class CreateClientService {
    async execute({ name, email, cpf, whatsapp }: IClient) {
        const repository = getCustomRepository(ClientRepository);

        existsOrError(name, 'Nome é necessário(a)!');
        existsOrError(email, 'E-mail é necessário(a)!');
        existsOrError(cpf, 'CPF é necessário(a)!');
        existsOrError(whatsapp, 'Whatsapp é necessário(a)!');

        const clientFromDB = await repository.findOne({ email });

        notExistsOrError(clientFromDB, 'Usuário já existente.');

        const client = repository.create({
            name,
            email,
            cpf,
            whatsapp
        });

        await repository.save(client);
    }
}