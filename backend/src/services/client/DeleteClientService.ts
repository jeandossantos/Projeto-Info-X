import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../../repositories/ClientRepository";

export class DeleteClientService {
    async execute(id: number) {
        const repository = getCustomRepository(ClientRepository);

        await repository.delete(id);
    }
}