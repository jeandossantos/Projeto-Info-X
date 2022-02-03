import { Request, Response } from "express";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

export class DeleteCustomerController {
    async handle(req: Request, res: Response) {
        const id = req.params.id;

        const service = new DeleteCustomerService();

        await service.execute(Number(id));

        return res.status(201).send();
    }
}