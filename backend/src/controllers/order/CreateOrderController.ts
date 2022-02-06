import { Request, Response } from "express";
import { IOrder } from "../../interfaces/IOrder";
import { CreateOrderService } from "../../services/order/CreateOrderService";

export class CreateOrderController {
    async handle(req: Request, res: Response) {
        const {
            client_id,
            employee_id,
            situation_id,
            equipment,
            difect,
            service,
            price
        } = req.body as IOrder;

        await new CreateOrderService().execute({
            client_id,
            employee_id,
            situation_id,
            equipment,
            difect,
            service,
            price
        });

        return res.status(201).send();
    }
}