import { Request, Response } from "express";
import { DeleteSituacionService } from "../../services/situation/DeleteSituacionService";

export class DeleteSituacionController {
    async handle(req: Request, res: Response) {
        const id = Number(req.params.id);

        const service = new DeleteSituacionService();

        await service.execute(id);

        return res.status(201).send();
    }
}