import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { generateUniqueId } from "../ultils/utils";
import { Employee } from "./Employee";
import { Situacion } from "./Situation";
import { Client } from "./Client";

@Entity('Orders')
export class Order {
    @PrimaryColumn()
    id: string;

    @Column()
    client_id: number;

    @JoinColumn({ name: 'client_id' })
    @ManyToOne(() => Client)
    client: Client;

    @Column()
    employee_id: number;

    @OneToOne(() => Employee)
    @JoinColumn({ name: 'employee_id' })
    employee: Employee;

    @Column()
    equipment: string;

    @Column()
    difect: string;

    @Column()
    service: string;

    @Column()
    price: number;

    @Column()
    situation_id: number;

    @JoinColumn({ name: 'situation_id' })
    situation: Situacion;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = generateUniqueId();
        }
    }
}