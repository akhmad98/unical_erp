import { ProductStatus } from "../enums/ProductStatus";
import { TrackingType } from "../enums/Tracking";
import { IVariantAttr } from "./IVariantAttr";
import { IVariantChildren } from "./IVariantChildren";

export interface IProduct {
    product_id: string;
    name: string,
    sku: string,
    unit_of_measure: number | null,
    tracking_type: TrackingType,
    is_active: boolean,
    barcode: number | null,
    status: ProductStatus,
    min_stock_level: number | null,
    comment: string | null,
    edited_by: string,
    edited_at: Date,
    variants: Array<IVariantChildren> | null;
}