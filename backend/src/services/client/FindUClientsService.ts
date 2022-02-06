import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../../repositories/ClientRepository";

export class FindClientsService {
    async execute() {
        const repository = getCustomRepository(ClientRepository);
        const clients = await repository.find();

        return clients;
    }
}