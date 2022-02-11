import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { generateUniqueId } from "../ultils/utils";
import { User } from "./User";
import { Situation } from "./Situation";
import { Client } from "./Client";
import { Exclude } from "class-transformer";

@Entity('Orders')
export class Order {
    @PrimaryColumn()
    id: string;

    @Exclude()
    @Column()
    client_id: number;

    @JoinColumn({ name: 'client_id' })
    @ManyToOne(() => Client)
    client: Client;

    @Exclude()
    @Column()
    user_id: number;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    equipment: string;

    @Column()
    difect: string;

    @Column()
    service: string;

    @Column()
    price: number;

    @Exclude()
    @Column()
    situation_id: number;

    @OneToOne(() => Situation)
    @JoinColumn({ name: 'situation_id' })
    situation: Situation;

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