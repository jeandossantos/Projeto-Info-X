import { getCustomRepository } from "typeorm";
import { SituationRepository } from "../../repositories/SituationRepository";

export class FindSituationsService {
    async execute(page: number = 1) {
        const repository = getCustomRepository(SituationRepository);

        const limit = 4;

        const [situations, count] = await repository.findAndCount({
            skip: page * limit - limit,
            take: 4,
            order: {
                id: 'DESC'
            }
        });

        return { situations, limit, count };
    }
}