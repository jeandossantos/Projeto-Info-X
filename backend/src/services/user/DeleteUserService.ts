import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";

export class DeleteUserService {
    async execute(id: number) {
        const repository = getCustomRepository(UserRepository);

        const user = await repository.findOne(id);

        if (!user) return;

        await repository.delete(user);
    }
}