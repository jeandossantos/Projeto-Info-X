import { EntityRepository, Repository } from "typeorm";
import { Situation } from "../entities/Situation";

@EntityRepository(Situation)
export class SituationRepository extends Repository<Situation> { }