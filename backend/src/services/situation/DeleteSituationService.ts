import { getCustomRepository } from "typeorm";
import { SituationRepository } from "../../repositories/SituationRepository";

export class DeleteSituationService {
    async execute(id: number) {
        const repository = getCustomRepository(SituationRepository);

        const situacion = await repository.findOne(id);

        if (!situacion) return;

        await repository.remove(situacion);
    }
}