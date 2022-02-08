import { Request, Response } from "express";
import { DeleteSituationService } from "../../services/situation/DeleteSituationService";

export class DeleteSituationController {
    async handle(req: Request, res: Response) {
        const id = Number(req.params.id);

        const service = new DeleteSituationService();

        await service.execute(id);

        return res.status(201).send();
    }
}