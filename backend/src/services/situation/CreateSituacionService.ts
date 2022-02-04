import { getCustomRepository } from "typeorm";
import { SituacionRepository } from "../../repositories/SituacionRepository";

export class CreateSituacionService {
    async execute(name: string) {
        const repository = getCustomRepository(SituacionRepository);

        const situation = repository.create({ name });

        await repository.save(situation);
    }
}