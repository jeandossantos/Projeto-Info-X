import { getCustomRepository } from "typeorm";
import { SituacionRepository } from "../../repositories/SituacionRepository";

export class DeleteSituacionService {
    async execute(id: number) {
        const repository = getCustomRepository(SituacionRepository);

        const situacion = await repository.findOne(id);

        if (!situacion) return;

        await repository.remove(situacion);
    }
}