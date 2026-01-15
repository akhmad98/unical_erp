import { StockRecorder } from "./stock-recorder";
import { ExpirableMetadata } from "../interfaces/metadata/purchase-receipt/ExpirableMetadata";
import { IPurchaseReceiptSpecFields } from "../interfaces/metadata/purchase-receipt/IPurchaseReceiptSpecFields";

export class PurchaseReceiptExpiredRecorder extends StockRecorder<ExpirableMetadata> {
    async proceed(item: any): Promise<void> {
        type Expr = {
            expiration_date: Date
        }
        const metadata: IPurchaseReceiptSpecFields & Expr = {
            supplier_id: item.supplier_id,
            receipt_date: item.receipt_date,
            expiration_date: item.expiration_date
        }

        await this.storage.proceedIncrement(item.product_id, item.sku, item.quantity, metadata);
    }
    
    async createRecord(item: ExpirableMetadata): Promise<void> {
        type Expr = {
            expiration_date: Date
        }
        const metadata: IPurchaseReceiptSpecFields & Expr = {
            supplier_id: item.supplier_id,
            receipt_date: item.receipt_date,
            expiration_date: item.expiration_date
        }
        await this.storage.saveRecord(
            item.warehouse_id,
            item.currency,
            item.product_id,
            item.quantity,
            item.unit_price,
            metadata,
        )
    }

    async update(productId: string, sku: string, updateFields: Partial<ExpirableMetadata>): Promise<void> {
        await this.storage.updateFields(productId, sku, updateFields)
    }
}