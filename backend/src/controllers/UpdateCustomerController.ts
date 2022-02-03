import { Request, Response } from "express";
import { ICustomer } from "../interfaces/ICustomer";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

export class UpdateCustomerController {
    async handle(req: Request, res: Response) {
        const { name, email, cpf, whatsapp } = req.body as ICustomer;

        const id = Number(req.params.id);
        const service = new UpdateCustomerService();

        await service.execute({ id, name, email, cpf, whatsapp });

        return res.status(201).send();
    }
}