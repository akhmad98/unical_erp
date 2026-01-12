// bridge pattern

export interface IPurchaseReceiptStorageByTracking {
    saveRecord(
        supplier_id: string,
        warehouse_id: string,
        receipt_date: Date,
        currency: number,
        product_id: string,
        quantity: number,
        unit_price: number,
        metadata: Record<string, any>
    ): Promise<void>;
}