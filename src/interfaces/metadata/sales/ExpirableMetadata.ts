import { IGeneralPermenantFields } from "../IGeneralPermenantFields";
import { ISaleSpecFields } from "./ISaleSpecFields";

type Combined = IGeneralPermenantFields & ISaleSpecFields;
export interface ExpirableMetadata extends Combined {
    expiration_date: Date
}