import { IGeneralPermenantFields } from "../IGeneralPermenantFields";
import { IPurchaseReceiptSpecFields } from "./IPurchaseReceiptSpecFields";

type Combined = IGeneralPermenantFields & IPurchaseReceiptSpecFields;
export interface SerialNumbersMetadata extends Combined {
    serial_numbers: Array<string>;
}