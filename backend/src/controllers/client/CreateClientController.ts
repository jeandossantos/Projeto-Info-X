import { Request, Response } from "express";

import { IClient } from "../../interfaces/IClient";
import { CreateClientService } from "../../services/client/CreateClientService";

export class CreateClientController {
    async handle(req: Request, res: Response) {
        const { name, email, cpf, whatsapp } = req.body as IClient;

        const service = new CreateClientService();

        await service.execute({ name, email, cpf, whatsapp });

        return res.status(201).send();
    }
}