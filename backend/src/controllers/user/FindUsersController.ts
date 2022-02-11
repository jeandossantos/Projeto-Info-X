import { Request, Response } from "express";
import { FindUsersService } from "../../services/user/FindUsersService";

export class FindUsersController {
    async handle(req: Request, res: Response) {
        const service = new FindUsersService();

        const user = await service.execute();

        return res.json(user);
    }
}