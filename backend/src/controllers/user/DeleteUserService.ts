import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const id = Number(req.params.id);

        const service = new DeleteUserService();

        await service.execute(id);

        return res.status(201).send();
    }
}