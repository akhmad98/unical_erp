import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { IVariantChildren } from "../interfaces/IVariantChildren";
import { IProduct } from "../interfaces/IProduct";

@Entity({ name: "inventory" })
export class Inventory {
    @Column({ type: 'string' })
    @Index()
    product_id: string;

    @Column({ type: 'string' })
    warehouse_id: string

    @PrimaryColumn({ type: 'timestamp with time zone' })
    edited_at: Date

    @Column()
    items: Array<IProduct> | Array<IVariantChildren> | null; 
}