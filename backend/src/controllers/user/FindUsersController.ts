import { Request, Response } from "express";
import { FindUsersService } from "../../services/user/FindUsersService";

export class FindUsersController {
    async handle(req: Request, res: Response) {
        const service = new FindUsersService();
        const page = req.query.page;
        const user = await service.execute(Number(page));

        return res.json(user);
    }
}