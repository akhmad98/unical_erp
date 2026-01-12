import { IPurchaseReceiptInteractor } from "../interfaces/IPurchaseReceiptInteractor";
import { IPurchaseReceiptRepository } from "../interfaces/IPurchaseRececiptService";
import { IPurchaseReceiptService } from "../interfaces/IPurchaseReceiptRepository";
import { IInventoryService } from "../interfaces/IInventoryService";
import { IInventoryRepository } from "../interfaces/IInvenoryRepository";

export class PurchaseReceiptInteractor implements IPurchaseReceiptInteractor{
    constructor(
        private purchaseReceiptRepo: IPurchaseReceiptRepository,
        private purchaseReceiptService: IPurchaseReceiptService,
        private inventoryService: IInventoryService,
    ) {
    }

    public async passOnConfirmedStage() {

    }

    public async passOnCancelledStage() {

    }
    // public async increaseInventory(): Promise<void> {
        
    // }

    // public async createStockRecords(): Promise<void> {
        
    // }

    // public async savePurchaseRecords(): Promise<void> {
        
    // }

    // public async handleCostMethod(): Promise<void> {
        
    // }
}