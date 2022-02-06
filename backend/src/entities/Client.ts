import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    whatsapp: string;

    @OneToMany(() => Order, order => order)
    orders: Order[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}