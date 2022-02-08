import { getCustomRepository } from "typeorm";

import { SituationRepository } from "../../repositories/SituationRepository";
import { ISituacion } from "../../interfaces/ISituacion";


export class UpdateSituationService {
    async execute({ id, name }: ISituacion) {
        const repository = getCustomRepository(SituationRepository);

        await repository.update(id, { name });
    }
}