import { Column, PrimaryColumn, Entity } from "typeorm";

@Entity({ name: "warehouse" })
export class Warehouse {
    @Column()
    name!: string

    @PrimaryColumn({ type: "uuid" })
    id!: string

    @Column()
    address!: string
}