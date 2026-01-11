import { IVariantAttr } from "./IVariantAttr";

export interface IVariantChildren {
    sku: string,
    name: string,
    unit_of_measure: number | null,
    barcode: number | null,
    min_stock_level: number | null,
    variant_attributes: IVariantAttr
}