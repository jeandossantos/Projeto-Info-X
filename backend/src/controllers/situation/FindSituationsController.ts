import { Request, Response } from "express";
import { FindSituationsService } from "../../services/situation/FindSituationsService";

export class FindSituationsController {
    async handle(req: Request, res: Response) {
        const service = new FindSituationsService();

        const situacions = await service.execute();

        res.json(situacions);
    }
}