import { Column, Entity, PrimaryGeneratedColumn, ObjectIdColumn, PrimaryColumn, OneToMany, Check } from 'typeorm';
import { Product } from './Product';

@Entity({ name: "purchase" })
@Check(`"quantity" > 0`)
@Check(`"unit_price" >= 0`)
export class PurchaseReceipt {
    @PrimaryGeneratedColumn()
    id!: number

    @PrimaryColumn({ type: "uuid" })
    supplier_id!: string

    @PrimaryColumn({ type: "uuid" })
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

    @PrimaryColumn({ type: "timestamp with time zone" })
    expiration_date!: Date

    @Column()
    lot_code!: number

    @Column()
    serial_numbers!: Array<number>
    //@OneToMany(() => Product, )
}