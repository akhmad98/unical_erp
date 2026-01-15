import { ObjectLiteral } from "typeorm";
// bridge pattern
// interface for saving
export interface ITrakckingStorage<T extends ObjectLiteral> {
    saveRecord(
        warehouse_id: string,
        currency: number,
        product_id: string,
        quantity: number,
        unit_price: number,
        additionalFields: Partial<T>
    ): Promise<void>;
    updateFields(productId: string, sku: string, updateData: Partial<T>): Promise<void>;
    proceedIncrement(productId: string, sku: string, qnty: number, additionalFields: Partial<T>): Promise<void>;
}