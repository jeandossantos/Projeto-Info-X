import { Request, Response } from "express";
import { DeleteClientService } from "../../services/client/DeleteClientService";

export class DeleteClientController {
    async handle(req: Request, res: Response) {
        const id = req.params.id;

        const service = new DeleteClientService();

        await service.execute(Number(id));

        return res.status(201).send();
    }
}