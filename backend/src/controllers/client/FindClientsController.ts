import { Request, Response } from "express";
import { FindClientsService } from "../../services/client/FindUClientsService";

export class FindClientsController {
    async handle(req: Request, res: Response) {
        const service = new FindClientsService();

        const clients = await service.execute();

        return res.json(clients);
    }
}