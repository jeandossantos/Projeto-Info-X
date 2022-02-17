import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";

export class DeleteUserService {
    async execute(id: number) {
        const repository = getCustomRepository(UserRepository);
        await repository.delete(id);
    }
}