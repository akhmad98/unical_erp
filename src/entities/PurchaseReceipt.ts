import { Column, Entity, PrimaryGeneratedColumn, ObjectIdColumn, PrimaryColumn, OneToMany, Check } from 'typeorm';
import { Product } from './Product';
import { IVariantChildren } from '../interfaces/IVariantChildren';

@Entity({ name: "purchase" })
@Check(`"quantity" > 0`)
@Check(`"unit_price" >= 0`)
export class PurchaseReceipt {
    @PrimaryGeneratedColumn()
    id!: number

    @PrimaryColumn()
    supplier_id!: string

    @PrimaryColumn()
    warehouse_id!: string

    @PrimaryColumn({ type: "timestamp with time zone" })
    receipt_date!: Date

    @Column()
    currency!: number

    @PrimaryColumn({ type: "uuid" })
    product_id!: string

    @Column({
        type: 'numeric'
    })
    quantity!: number

    @Column({
        type: 'numeric'
    })
    unit_price!: number

    @Column({ type: "timestamp with time zone", nullable: true })
    expiration_date!: Date | null

    @Column({ nullable: true })
    lot_code!: number | null

    @Column({ nullable: true})
    serial_numbers!: Array<number> | null

    @OneToMany(() => Product, (product) => product.variants)
    products: Array<IVariantChildren> | Array<Product>
}