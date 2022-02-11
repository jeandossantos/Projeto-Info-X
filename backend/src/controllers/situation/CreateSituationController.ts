import { Request, Response } from "express";
import { CreateSituationService } from "../../services/situation/CreateSituationService";

export class CreateSituationController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const service = new CreateSituationService();

        await service.execute(name);

        return res.status(201).send();
    }
}