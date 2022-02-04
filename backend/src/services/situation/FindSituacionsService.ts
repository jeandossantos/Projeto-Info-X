import { getCustomRepository } from "typeorm";
import { SituacionRepository } from "../../repositories/SituacionRepository";

export class FindSituacionService {
    async execute() {
        const repository = getCustomRepository(SituacionRepository);
        const situacions = await repository.find();

        return situacions;
    }
}