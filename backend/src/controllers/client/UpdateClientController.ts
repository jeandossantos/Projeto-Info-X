import { Request, Response } from "express";
import { IClient } from "../../interfaces/IClient";
import { UpdateClientService } from "../../services/client/UpdateClientService";

export class UpdateClientController {
    async handle(req: Request, res: Response) {
        const { name, email, cpf, whatsapp } = req.body as IClient;

        const id = Number(req.params.id);
        const service = new UpdateClientService();

        await service.execute({ id, name, email, cpf, whatsapp });

        return res.status(201).send();
    }
}