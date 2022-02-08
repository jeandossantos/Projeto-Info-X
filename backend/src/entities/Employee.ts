import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employees')
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    cpf: string;

    @Column()
    whatsapp: string;

    @Column()
    @Exclude()
    admin: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}