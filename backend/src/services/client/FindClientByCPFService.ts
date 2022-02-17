import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../../repositories/ClientRepository";

export class FindClientByCPFService {
    async execute(cpf: string) {
        const repository = getCustomRepository(ClientRepository);

        const client = await repository.findOne({ cpf });

        return client;
    }
}