import { Request, Response } from "express";
import { IUser } from "../../interfaces/IUser";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, confirmPassword, cpf, whatsapp, admin } = req.body as IUser;

        const service = new CreateUserService();

        await service.execute({
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