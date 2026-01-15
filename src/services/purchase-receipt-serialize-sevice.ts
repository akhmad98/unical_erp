import { IPermanentFields } from "../interfaces/metadata/purchase-receipt/IPermenantFields";
import { StockRecorder } from "./stock-recorder"
import { SerialNumbersMetadata } from "../interfaces/metadata/purchase-receipt/SerialNumbersMetadata";
import { IPurchaseReceiptSpecFields } from "../interfaces/metadata/purchase-receipt/IPurchaseReceiptSpecFields";

export class PurchaseReceiptSerializedRecorder extends StockRecorder<SerialNumbersMetadata> {
    async proceed(item: any): Promise<void> {
        type Sr = {
            serial_numbers: Array<string>
        }
        const metadata: IPurchaseReceiptSpecFields & Sr = {
            supplier_id: item.supplier_id,
            receipt_date: item.receipt_date,
            serial_numbers: item.serial_numbers
        }

        await this.storage.proceedIncrement(item.product_id, item.sku, item.quantity, metadata);
    }
    
    async createRecord(item: SerialNumbersMetadata): Promise<void> {
        type Sr = {
            serial_numbers: Array<string>
        }
        const metadata: IPurchaseReceiptSpecFields & Sr = {
            supplier_id: item.supplier_id,
            receipt_date: item.receipt_date,
            serial_numbers: item.serial_numbers
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

    async update(productId: string, sku: string, updateFields: Partial<SerialNumbersMetadata>): Promise<void> {
        await this.storage.updateFields(productId, sku, updateFields)
    }
}