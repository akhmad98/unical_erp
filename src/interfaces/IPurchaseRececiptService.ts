export interface IPurchaseReceiptRepository {
    incrementInventory(): Promise<void>;
    recordCost(): Promise<void>;
    updateCost(): Promise<void>;
}