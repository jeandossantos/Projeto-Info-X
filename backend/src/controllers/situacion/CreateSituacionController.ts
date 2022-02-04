import { Request, Response } from "express";
import { CreateSituacionService } from "../../services/situation/CreateSituacionService";

export class CreateSituacionController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const service = new CreateSituacionService();

        await service.execute(name);

        return res.status(201).send();
    }
}