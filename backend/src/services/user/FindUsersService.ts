import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";

export class FindUsersService {
    async execute() {
        const repository = getCustomRepository(UserRepository);

        const users = await repository.find();

        return instanceToPlain(users);
    }
}