import { ProductStatus } from "../enums/ProductStatus";
import { TrackingType } from "../enums/Tracking";
import { IVariantAttr } from "./IVariantAttr";

export interface IProduct {
    name: string,
    sku: string,
    unit_of_measure: number,
    tracking_type: TrackingType,
    is_active: boolean,
    barcode: number,
    status: ProductStatus,
    min_stock_level: number,
    comment: string,
    variant_attributes: IVariantAttr,
    variant_parent: IProduct | null,
    variant_children: IProduct[] | null
}