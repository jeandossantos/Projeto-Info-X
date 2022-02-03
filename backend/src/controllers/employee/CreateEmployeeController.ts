import { Request, Response } from "express";
import { IEmployee } from "../../interfaces/IEmployee";
import { CreateEmployeeService } from "../../services/employee/CreateEmployeeService";

export class CreateEmployeeController {
    async handle(req: Request, res: Response) {
        const { name, email, password, cpf, whatsapp, admin } = req.body as IEmployee;

        const service = new CreateEmployeeService();

        await service.execute({
            name,
            email,
            password,
            cpf,
            whatsapp,
            admin
        });

        return res.status(201).send();
    }
}