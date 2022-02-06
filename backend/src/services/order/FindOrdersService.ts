import { getCustomRepository } from "typeorm";
import { OrderRepository } from "../../repositories/OrderRepository";

export class FindOrdersService {
    async execute() {
        const repository = getCustomRepository(OrderRepository);

        const orders = await repository.find();

        return orders;
    }
}