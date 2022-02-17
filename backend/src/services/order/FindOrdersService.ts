import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { OrderRepository } from "../../repositories/OrderRepository";

export class FindOrdersService {
    async execute(page: number = 1) {
        const repository = getCustomRepository(OrderRepository);
        const limit = 4;

        const [orders, count] = await repository.findAndCount({
            relations: ['situation', 'client', 'user'],
            skip: page * limit - limit,
            take: 4,
            order: {
                id: 'DESC'
            }
        });

        return instanceToPlain({ orders, limit, count });
    }
}