import { IGeneralPermenantFields } from "../IGeneralPermenantFields";
import { ISaleSpecFields } from "./ISaleSpecFields";

type Combined = IGeneralPermenantFields & ISaleSpecFields;
export interface LotMetadata extends Combined {
    lot_code: number;
}