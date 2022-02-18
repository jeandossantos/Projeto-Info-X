import { Request, Response } from "express";
import { FindAllSituationsService } from "../../services/situation/FindAllSituationsService";

export class FindAllSituationsController {
    async handle(req: Request, res: Response) {
        const service = new FindAllSituationsService();

        const situations = await service.execute();

        return res.json(situations);
    }
}