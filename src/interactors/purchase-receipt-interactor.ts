import { IPurchaseReceiptInteractor } from "../interfaces/IPurchaseReceiptInteractor";
import { IPurchaseReceiptRepository } from "../interfaces/IPurchaseRececiptService";
import { IPurchaseReceiptService } from "../interfaces/IPurchaseReceiptRepository";

export class PurchaseReceiptInteractor implements IPurchaseReceiptInteractor{
    constructor(
        private purchaseReceiptRepo: IPurchaseReceiptRepository,
        private purchaseReceiptService: IPurchaseReceiptService
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