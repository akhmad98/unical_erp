import { Column, Entity, Check, OneToMany, ObjectIdColumn, PrimaryColumn, ManyToMany, ManyToOne } from 'typeorm';

@Entity({ name: 'sales' })
@Check(`"quantity" > 0`)
@Check(`"unit_price" >= 0`)
export class Sale {
    @PrimaryColumn({ type: "uuid" })
    customer_id!: string

    @PrimaryColumn({ type: "uuid" })
    warehouse_id!: string

    @PrimaryColumn({ type: "uuid" })
    product_id!: string

    @Column({
        type: "timestamp with time zone"
    })
    sale_date!: Date

    @Column()
    currency!: number

    @Column()
    comment!: string

    @Column({
        type: 'numeric'
    })
    quantity!: number

    @Column({
        type: 'numeric'
    })
    unit_price!: number
}