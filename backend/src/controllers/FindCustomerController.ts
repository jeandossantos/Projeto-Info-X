import { Request, Response } from "express";
import { FindCustomerService } from "../services/FindCustomerService";

export class FindCustomerController {
    async handle(req: Request, res: Response) {
        const service = new FindCustomerService();

        const customers = await service.execute();

        res.json(customers);
    }
}