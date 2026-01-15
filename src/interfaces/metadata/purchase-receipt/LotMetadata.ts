import { IGeneralPermenantFields } from "../IGeneralPermenantFields";
import { IPurchaseReceiptSpecFields } from "./IPurchaseReceiptSpecFields";

type Combined = IGeneralPermenantFields & IPurchaseReceiptSpecFields;
export interface LotMetadata extends Combined {
    lot_code: number;
}