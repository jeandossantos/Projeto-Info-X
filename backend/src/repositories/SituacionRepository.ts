import { EntityRepository, Repository } from "typeorm";
import { Situacion } from "../entities/Situation";

@EntityRepository(Situacion)
export class SituacionRepository extends Repository<Situacion> { }