import { Request, Response } from "express";
import { DeleteEmployeeService } from "../../services/employee/DeleteEmployeeService";

export class DeleteEmployeeController {
    async handle(req: Request, res: Response) {
        const id = Number(req.params.id);

        const service = new DeleteEmployeeService();

        await service.execute(id);

        return res.status(201).send();
    }
}