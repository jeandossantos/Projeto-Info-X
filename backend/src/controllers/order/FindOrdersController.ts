import { Request, Response } from "express";
import { FindOrdersService } from "../../services/order/FindOrdersService";

export class FindOrdersController {
    async handle(req: Request, res: Response) {
        const service = new FindOrdersService();
        const page = req.query.page;

        const orders = await service.execute(Number(page));

        return res.json(orders);
    }
}