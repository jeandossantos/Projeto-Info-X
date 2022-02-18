import { Request, Response } from "express";
import { FindOrderByIdService } from "../../services/order/FindOrderByIdService";

export class FindOrderByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new FindOrderByIdService();

        const order = await service.execute(id);

        return res.json(order);
    }
}