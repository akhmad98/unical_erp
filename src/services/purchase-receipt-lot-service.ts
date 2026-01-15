import { StockRecorder } from "./stock-recorder";
import { LotMetadata } from "../interfaces/metadata/purchase-receipt/LotMetadata";
import { IPurchaseReceiptSpecFields } from "../interfaces/metadata/purchase-receipt/IPurchaseReceiptSpecFields";

export class PurchaseReceiptLotRecorder extends StockRecorder<LotMetadata> {
    async proceed(item: any): Promise<void> {
        type Lot = {
            lot_code: number
        }
        const metadata: IPurchaseReceiptSpecFields & Lot = {
            supplier_id: item.supplier_id,
            receipt_date: item.receipt_date,
            lot_code: item.lot_code
        }

        await this.storage.proceedIncrement(item.product_id, item.sku, item.quantity, metadata);
    }
    
    async createRecord(item: LotMetadata): Promise<void> {
        type Lot = {
            lot_code: number
        }
        const metadata: IPurchaseReceiptSpecFields & Lot = {
            supplier_id: item.supplier_id,
            receipt_date: item.receipt_date,
            lot_code: item.lot_code
        }
        await this.storage.saveRecord(
            item.warehouse_id,
            item.currency,
            item.product_id,
            item.quantity,
            item.unit_price,
            metadata
        )
    }

    async update(productId: string, sku: string, updateFields: Partial<LotMetadata>): Promise<void> {
        await this.storage.updateFields(productId, sku, updateFields)
    }
}