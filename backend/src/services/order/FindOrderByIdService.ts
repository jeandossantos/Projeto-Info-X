import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { OrderRepository } from "../../repositories/OrderRepository";

export class FindOrderByIdService {
    async execute(id: string) {
        const repository = getCustomRepository(OrderRepository);

        const order = await repository.findOne({ id }, {
            relations: ['situation', 'client', 'user'],
        });

        return instanceToPlain(order);
    }
}