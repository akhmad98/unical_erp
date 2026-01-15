import { ObjectLiteral } from "typeorm";
import { ITrakckingStorage } from "../interfaces/ITrackingStorage";

export abstract class StockRecorder<T extends ObjectLiteral> {
    constructor(protected storage: ITrakckingStorage<T>) {
    }

    abstract proceed(item: any): Promise<void>;
    abstract createRecord(item: T): Promise<void>;
    abstract update(productId: string, sku: string, updateFields: Partial<T>): Promise<void>;
}