import { getCustomRepository } from "typeorm";
import { IOrder } from "../../interfaces/IOrder";
import { OrderRepository } from "../../repositories/OrderRepository";

export class CreateOrderService {
    async execute({
        client_id,
        user_id,
        situation_id,
        equipment,
        difect,
        service,
        price
    }: IOrder) {
        const repository = getCustomRepository(OrderRepository);

        const order = repository.create({
            client_id,
            user_id,
            situation_id,
            equipment,
            difect,
            service,
            price
        });

        await repository.save(order);
    }
}