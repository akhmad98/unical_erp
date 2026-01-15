import { ObjectLiteral, MongoRepository } from "typeorm";
import { ITrakckingStorage } from "../interfaces/ITrackingStorage";
import { TrackingType } from "../enums/Tracking";

export class MongoPurchaseStorageByTracking<T extends ObjectLiteral> implements ITrakckingStorage<T> {
    constructor(private repo: MongoRepository<any>) {}

    async proceedIncrement(productId: string, sku: string, qnty: number, additionalFields: Partial<T>): Promise<void> {
        const result = await this.repo.findOneBy({
            product_id: productId, sku: sku
        });

        if (result.tracking_type !== TrackingType.VARIANT) {
            result.unit_of_measure =+ qnty;
            result.min_stock_level =+ qnty;
        } else if (result.tracking_type === TrackingType.VARIANT && result.variants?.length) {
            result.variants.filter((el: any) => el.sku.match(`${productId}-${el.variant_attributes.color}-${el.variant_attributes.size}`))[0].unit_of_measure =+ qnty;
            result.variants.filter((el: any) => el.sku.match(`${productId}-${el.variant_attributes.color}-${el.variant_attributes.size}`))[0].min_stock_level =+ qnty;
        }

        this.repo.save(result);
    }

    async saveRecord(warehouse_id: string, currency: number, product_id: string, quantity: number, unit_price: number, additionalFields: T): Promise<void> {
        const permPurch = this.repo.create({
            warehouse_id,
            currency,
            product_id,
            quantity,
            unit_price,
            ...additionalFields
        });
        await this.repo.save(permPurch);
    }

    async updateFields(productId: string, sku: string, updateFields: Partial<T>): Promise<void> {
        await this.repo.updateOne(
            { prduct_id: productId, sku: sku },
            { $set: { ...updateFields, edit_at: new Date() } }
        )
    }
}