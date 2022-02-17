import { Request, Response } from "express";
import { IUser } from "../../interfaces/IUser";
import { UpdateUserService } from "../../services/user/UpdateUserService";

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, confirmPassword, cpf, whatsapp, admin } = req.body as IUser;
        const id = Number(req.params.id);

        const service = new UpdateUserService();

        await service.execute({
            id,
            name,
            email,
            password,
            confirmPassword,
            cpf,
            whatsapp,
            admin
        });

        return res.status(201).send();
    }
}