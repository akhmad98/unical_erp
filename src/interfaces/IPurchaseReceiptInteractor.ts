export interface IPurchaseReceiptInteractor {
    passOnConfirmedStage(): Promise<void>;
    passOnCancelledStage(): Promise<void>;

    // increaseInventory(): Promise<void>;
    // createStockRecords(): Promise<void>;
    // savePurchaseRecords(): Promise<void>;
    // handleCostMethod(): Promise<void>;
}