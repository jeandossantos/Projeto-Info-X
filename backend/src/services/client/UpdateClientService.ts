import { getCustomRepository } from "typeorm";

import { IClient } from "../../interfaces/IClient";
import { ClientRepository } from "../../repositories/ClientRepository";
import { existsOrError } from "../../ultils/validation";

export class UpdateClientService {
    async execute({ id, name, email, cpf, whatsapp }: IClient) {
        const repository = getCustomRepository(ClientRepository);

        existsOrError(name, 'Nome é necessário(a)!');
        existsOrError(email, 'E-mail é necessário(a)!');
        existsOrError(cpf, 'CPF é necessário(a)!');
        existsOrError(whatsapp, 'Whatsapp é necessário(a)!');

        const client = await repository.create({
            id,
            name,
            email,
            cpf,
            whatsapp
        });

        await repository.save(client);
    }
}