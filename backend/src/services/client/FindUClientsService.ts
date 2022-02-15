import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../../repositories/ClientRepository";

export class FindClientsService {
    async execute(page: number = 1) {
        const repository = getCustomRepository(ClientRepository);

        const limit = 4;

        const [clients, count] = await repository.findAndCount({
            skip: page * limit - limit,
            take: 4,
            order: {
                id: 'DESC'
            }
        });

        return { clients, count, limit };
    }
}