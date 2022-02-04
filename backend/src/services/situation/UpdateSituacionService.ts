import { getCustomRepository } from "typeorm";

import { SituacionRepository } from "../../repositories/SituacionRepository";
import { ISituacion } from "../../interfaces/ISituacion";


export class UpdateSituacionService {
    async execute({ id, name }: ISituacion) {
        const repository = getCustomRepository(SituacionRepository);

        await repository.update(id, { name });
    }
}