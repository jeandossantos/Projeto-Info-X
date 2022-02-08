import { Request, Response } from "express";
import { UpdateSituationService } from "../../services/situation/UpdateSituationService";

export class UpdateSituationController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;
        const id = Number(req.params.id);

        const service = new UpdateSituationService();

        await service.execute({ id, name });

        return res.status(201).send();
    }
}