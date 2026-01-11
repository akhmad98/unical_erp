import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { TrackingType } from '../enums/Tracking';
import { ProductStatus } from '../enums/ProductStatus';
import { IVariantChildren } from '../interfaces/IVariantChildren';

@Entity({ name: "product"})
export class Product {
    @PrimaryGeneratedColumn('uuid')
    product_id: string;

    @Column()
    name!: string;

    @PrimaryColumn({ type: 'string' })
    sku!: string;

    @Column({ nullable:  true })
    unit_of_measure!: number | null;

    @Column({
        type: 'enum',
        enum: TrackingType,
        default: TrackingType.SIMPLE
    })
    tracking_type!: TrackingType;

    @Column({ type: 'boolean', default: true })
    is_active!: boolean;

    @Column({ nullable: true })
    barcode!: number | null;

    @Column({
        type: 'enum',
        enum: ProductStatus,
        default: ProductStatus.CONFIRMED
    })
    status!: ProductStatus;

    @Column({ nullable: true })
    min_stock_level!: number | null;

    @PrimaryColumn({ type: "timestamp with time zone" })
    edited_at!: Date

    @Column()
    edited_by!: string

    @Column({ nullable: true })
    comment!: string | null;

    @Column({ nullable: true })
    variants: Array<IVariantChildren> | null;
}
