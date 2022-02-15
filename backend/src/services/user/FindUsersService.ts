import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";

export class FindUsersService {
    async execute(page: number = 1) {
        const repository = getCustomRepository(UserRepository);

        const limit = 4;

        const [users, count] = await repository.findAndCount({
            skip: page * limit - limit,
            take: 4,
            order: {
                id: 'DESC'
            }
        });

        return instanceToPlain({ users, limit, count });
    }
}