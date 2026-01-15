import { IGeneralPermenantFields } from "../IGeneralPermenantFields";
import { IPurchaseReceiptSpecFields } from "./IPurchaseReceiptSpecFields";

type Combined = IGeneralPermenantFields & IPurchaseReceiptSpecFields;
export interface ExpirableMetadata extends Combined {
    expiration_date: Date
}