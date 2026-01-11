import { IsNumber, IsObject, IsString } from "class-validator";
import { IVariantAttr } from "../interfaces/IVariantAttr";

export class VariantProductDTO {
    @IsString()
    readonly name: string;

    @IsString()
    readonly sku: string;

    @IsNumber()
    readonly unit_of_measure: number | null;

    @IsNumber()
    readonly barcode: number | null;

    @IsNumber()
    readonly min_stock_level: number | null;

    @IsObject()
    readonly variant_attributes: IVariantAttr;
}