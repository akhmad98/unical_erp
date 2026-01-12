import { IPurchaseReceiptStorageByTracking } from "../interfaces/IPurchaseReceiptStorageByTracking";

export abstract class StockRecorder {
    constructor(protected storage: IPurchaseReceiptStorageByTracking) {
    }
    abstract process(item: any): Promise<void>;
}