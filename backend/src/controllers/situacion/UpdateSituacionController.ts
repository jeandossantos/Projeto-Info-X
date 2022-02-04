import { Request, Response } from "express";
import { UpdateSituacionService } from "../../services/situation/UpdateSituacionService";

export class UpdateSituacionController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const id = Number(req.params.id);

        const service = new UpdateSituacionService();

        await service.execute({ id, name });

        return res.status(201).send();
    }
}