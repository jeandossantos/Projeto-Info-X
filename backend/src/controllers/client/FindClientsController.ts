import { Request, Response } from "express";
import { FindClientsService } from "../../services/client/FindUClientsService";

export class FindClientsController {
    async handle(req: Request, res: Response) {
        const service = new FindClientsService();
        const page = req.query.page;

        const clients = await service.execute(Number(page));

        return res.json(clients);
    }
}