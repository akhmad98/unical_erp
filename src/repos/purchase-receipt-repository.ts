import AppDataSource from "../config/db";
import { PurchaseReceipt } from "../entities/PurchaseReceipt";
import { IPurchaseReceiptRepository } from "../interfaces/IPurchaseRececiptService";
import { SerialNumbersMetadata } from "../interfaces/metadata/purchase-receipt/SerialNumbersMetadata";
import { MongoPurchaseStorageByTracking } from "../peristence/MongoPurchaseStorageByTracking";

export class PurchaseReceiptRepository implements IPurchaseReceiptRepository {
    private readonly _db;

    constructor() {
        this._db = AppDataSource;
    }

    public async incrementInventory(): Promise<void> {
        //const mongoStorage = new MongoPurchaseStorageByTracking<SerialNumbersMetadata>();
    }

    public async recordCost(): Promise<void> {
        
    }

    public async updateCost(): Promise<void> {
        
    }

    public async createNew(): Promise<void> {

    }

    public async retrieve(): Promise<PurchaseReceipt> {
        return new PurchaseReceipt();
    }

    public async retrieveAll(): Promise<Array<PurchaseReceipt>>{
        return [];
    }
}