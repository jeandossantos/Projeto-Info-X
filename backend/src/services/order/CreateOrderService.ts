import { getCustomRepository } from "typeorm";
import { IOrder } from "../../interfaces/IOrder";
import { OrderRepository } from "../../repositories/OrderRepository";
import { existsOrError } from "../../ultils/validation";

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

        existsOrError(client_id, 'Informe o cliente!');
        existsOrError(user_id, 'Usuário necessário!');
        existsOrError(situation_id, 'Informe o Status da ordem!');
        existsOrError(equipment, 'Descrição do equipamento necessária!');

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