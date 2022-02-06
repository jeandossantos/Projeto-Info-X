import { Request, Response } from "express";
import { IOrder } from "../../interfaces/IOrder";
import { UpdateOrderService } from "../../services/order/UpdateOrderService";

export class UpdateOrderController {
    async handle(req: Request, res: Response) {
        const { equipment, difect, service, situation_id, price } = req.body as IOrder;
        const id = String(req.params.id);

        await new UpdateOrderService().execute({
            id,
            equipment,
            difect,
            service,
            situation_id,
            price
        });

        return res.status(201).send();
    }
}