import { PurchaseReceipt } from "../entities/PurchaseReceipt";
import { TrackingType } from "../enums/Tracking";

export interface IPurchaseReceiptService {
    validateNumericsForSimpleProducts(qnty: number, price: number): boolean;
    validateForExpirableProducts(exprDate: Date): boolean;
    validateForSerializedProducts(qnty: number, serials: Array<string>): boolean;
    validateSerials(serials: Array<string>): boolean;
    validateForVariant(product: any): boolean;
    // here 
    // createStockRecords(): Promise<PurchaseReceipt>;
}