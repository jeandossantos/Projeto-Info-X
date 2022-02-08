import { getCustomRepository } from "typeorm";
import { SituationRepository } from "../../repositories/SituationRepository";

export class FindSituationsService {
    async execute() {
        const repository = getCustomRepository(SituationRepository);
        const situacions = await repository.find();

        return situacions;
    }
}