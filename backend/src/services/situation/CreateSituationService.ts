import { getCustomRepository } from "typeorm";
import { SituationRepository } from "../../repositories/SituationRepository";

export class CreateSituationService {
    async execute(name: string) {
        const repository = getCustomRepository(SituationRepository);

        const situation = repository.create({ name });

        await repository.save(situation);
    }
}