import { IsEnum, IsString, IsNumber, ValidateIf, IsNotEmpty } from "class-validator";
import { TrackingType } from "../enums/Tracking";
import { VariantProductDTO } from "./variant-product-DTO";

export class CreateProductDTO {
    @IsString()
    readonly name: string;

    @IsString()
    readonly sku: string;

    @IsNumber()
    readonly unit_of_measure: number;

    @IsEnum(TrackingType, { message: 'Invalid type provided!'})
    readonly tracking_type: TrackingType;

    @IsNumber()
    readonly barcode: number

    @ValidateIf(el => el.tracking_type === TrackingType.VARIANT)
    readonly variants: Array<VariantProductDTO>;
}