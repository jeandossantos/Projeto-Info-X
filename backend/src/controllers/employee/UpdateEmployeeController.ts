import { Request, Response } from "express";
import { IEmployee } from "../../interfaces/IEmployee";
import { UpdateEmployeeService } from "../../services/employee/UpdateEmployeeService";

export class UpdateEmployeeController {
    async handle(req: Request, res: Response) {
        const { name, email, password, cpf, whatsapp, admin } = req.body as IEmployee;
        const id = Number(req.params.id);

        const service = new UpdateEmployeeService();

        await service.execute({
            id,
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