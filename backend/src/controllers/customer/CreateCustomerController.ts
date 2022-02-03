import { Request, Response } from "express";

import { ICustomer } from "../../interfaces/ICustomer";
import { CreateCustomerService } from "../../services/customer/CreateCustomerService";

export class CreateCustomerController {
    async handle(req: Request, res: Response) {
        const { name, email, cpf, whatsapp } = req.body as ICustomer;

        const service = new CreateCustomerService();

        await service.execute({ name, email, cpf, whatsapp });

        return res.status(201).send();
    }
}