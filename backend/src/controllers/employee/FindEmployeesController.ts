import { Request, Response } from "express";
import { FindEmployeesService } from "../../services/employee/FindEmployeesService";

export class FindEmployeesController {
    async handle(req: Request, res: Response) {
        const service = new FindEmployeesService();

        const employees = service.execute();

        return res.json(employees);
    }
}