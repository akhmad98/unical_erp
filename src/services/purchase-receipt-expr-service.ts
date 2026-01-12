import { IPermanentFields } from "../interfaces/IPermenantFields";
import { StockRecorder } from "./stock-recorder";

export class PurchaseReceiptExpiredRecorder extends StockRecorder {
    async process(item: IPermanentFields): Promise<void> {
        const metadata = {
            expiration_date: item.expiration_date
        }

        await this.storage.saveRecord(
            item.supplier_id,
            item.warehouse_id,
            item.receipt_date,
            item.currency,
            item.product_id,
            item.quantity,
            item.unit_price,
            metadata
        )
    }
}