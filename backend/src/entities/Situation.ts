import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('situations')
export class Situation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string
}