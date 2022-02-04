import { Request, Response } from "express";
import { FindSituacionService } from "../../services/situation/FindSituacionsService";

export class FindSituacionController {
    async handle(req: Request, res: Response) {
        const service = new FindSituacionService();

        const situacions = await service.execute();

        res.json(situacions);
    }
}