import { Column, Entity, PrimaryColumn } from "typeorm";
import { IVariantChildren } from "../interfaces/IVariantChildren";
import { Product } from "./Product";

@Entity({ name: "inventory" })
export class Inventory {
    @Column({ type: 'string' })
    warehouse_id: string

    @PrimaryColumn({ type: 'timestamp with time zone' })
    edited_at: Date

    @Column()
    items: Array<IVariantChildren | Product> | Array<IVariantChildren & Product> 
}