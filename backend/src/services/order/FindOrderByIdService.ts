import { getCustomRepository } from "typeorm";
import { OrderRepository } from "../../repositories/OrderRepository";

export class FindOrderByIdService {
    async execute(id: string) {
        const repository = getCustomRepository(OrderRepository);

        const order = await repository.findOne({ id });

        return order;
    }
}