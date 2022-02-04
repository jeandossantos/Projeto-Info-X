import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('situacions')
export class Situacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string
}