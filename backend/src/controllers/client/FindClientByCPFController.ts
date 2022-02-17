import { Request, Response } from "express";
import { FindClientByCPFService } from "../../services/client/FindClientByCPFService";

export class FindClientByCPFController {
    async handle(req: Request, res: Response) {
        const cpf = req.params.cpf;

        const service = new FindClientByCPFService();
        const client = await service.execute(cpf);

        return res.json(client);
    }
}