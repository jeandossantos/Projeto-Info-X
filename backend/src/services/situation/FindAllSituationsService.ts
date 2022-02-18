import { getCustomRepository } from "typeorm";
import { SituationRepository } from "../../repositories/SituationRepository";

export class FindAllSituationsService {
    async execute() {
        const repository = getCustomRepository(SituationRepository);

        const situations = await repository.find();

        return situations;
    }
}