import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Index } from 'typeorm';
import { TrackingType } from '../enums/Tracking';
import { ProductStatus } from '../enums/ProductStatus';
import { IVariantChildren } from '../interfaces/IVariantChildren';

@Entity({ name: "product"})
export class Product {
    @Column({ type: 'string' })
    @Index()
    product_id: string;

    @Column()
    name!: string;

    @PrimaryColumn({ type: 'string' })
    @Index()
    sku!: string;

    @Column({ default: 1 })
    unit_of_measure!: number;

    @Column({
        type: 'enum',
        enum: TrackingType,
        default: TrackingType.SIMPLE
    })
    tracking_type!: TrackingType;

    @Column({ type: 'boolean', default: true })
    @Index()
    is_active!: boolean;

    @Column({ nullable: true })
    barcode!: number | null;

    @Column({
        type: 'enum',
        enum: ProductStatus,
        default: ProductStatus.CONFIRMED
    })
    @Index()
    status!: ProductStatus;

    @Column({ nullable: true, default: 0 })
    min_stock_level!: number;

    @PrimaryColumn({ type: "timestamp with time zone" })
    edited_at!: Date

    @Column()
    edited_by!: string

    @Column({ nullable: true })
    comment!: string | null;

    @Column({ nullable: true })
    variants: Array<IVariantChildren> | null;
}
