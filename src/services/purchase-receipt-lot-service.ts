import { IPermanentFields } from "../interfaces/IPermenantFields";
import { StockRecorder } from "./stock-recorder";

export class PurchaseReceiptLotRecorder extends StockRecorder {
    async process(item: IPermanentFields): Promise<void> {
        const metadata = {
            lot_code: item.lot_code
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