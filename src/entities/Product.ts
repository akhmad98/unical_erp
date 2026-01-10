import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ObjectIdColumn, PrimaryColumn, ManyToMany, ManyToOne } from 'typeorm';
import { TrackingType } from '../enums/Tracking';
import { ProductStatus } from '../enums/ProductStatus';
import { IVariantAttr } from '../interfaces/IVariantAttr';

@Entity({ name: "product"})
export class Product {
    @Column()
    name!: string;

    @PrimaryColumn({ type: 'string', generated: 'uuid' })
    sku!: string;

    @Column()
    unit_of_measure!: number;

    @Column({
        type: 'enum',
        enum: TrackingType,
        default: TrackingType.SIMPLE
    })
    tracking_type!: TrackingType;

    @Column({ type: 'boolean', default: true })
    is_active!: boolean;

    @Column()
    barcode!: number;

    @Column({
        type: 'enum',
        enum: ProductStatus,
        default: ProductStatus.CONFIRMED
    })
    status!: ProductStatus;

    @Column()
    min_stock_level!: number;

    @PrimaryColumn({ type: "timestamp with time zone" })
    edited_at!: Date

    @Column()
    edited_by!: string

    @Column({ nullable: true })
    comment!: string;

    @Column({ nullable: true })
    variant_attributes: IVariantAttr;

    @ManyToOne((type) => Product, (product) => product.variant_children)
    variant_parent!: Product | null

    @OneToMany((type) => Product, (product) => product.variant_parent)
    variant_children!: Product[] | null
}
