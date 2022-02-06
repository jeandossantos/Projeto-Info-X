import { getCustomRepository } from "typeorm";
import { IOrder } from "../../interfaces/IOrder";
import { OrderRepository } from "../../repositories/OrderRepository";

export class UpdateOrderService {
    async execute({ id, equipment, difect, service, situation_id, price }: IOrder) {
        const repository = getCustomRepository(OrderRepository);

        const order = repository.create({
            id,
            equipment,
            difect,
            service,
            situation_id,
            price
        });

        await repository.save(order);
    }
}