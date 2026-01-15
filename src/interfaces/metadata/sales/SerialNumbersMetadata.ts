import { IGeneralPermenantFields } from "../IGeneralPermenantFields";
import { ISaleSpecFields } from "./ISaleSpecFields";

type Combined = IGeneralPermenantFields & ISaleSpecFields;
export interface SerialNumbersMetadata extends Combined {
    serial_numbers: Array<string>;
}