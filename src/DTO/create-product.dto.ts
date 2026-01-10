import { IsUUID, IsEnum, IsString, IsNumber, ValidateIf } from "class-validator";
import { TrackingType } from "../enums/Tracking";
import { IVariantAttr } from "../interfaces/IVariantAttr";

export class CreateProductDTO {
    @IsString()
    readonly name: string;

    @IsUUID()
    readonly sku: string;

    @IsNumber()
    readonly unit_of_measure: number;

    @IsEnum(TrackingType, { message: 'Invalid type provided!'})
    readonly tracking_type: TrackingType;

    @IsNumber()
    readonly barcode: number

    @ValidateIf(el => el.tracking_type === TrackingType.VARIANT)
    readonly variant_attributes: IVariantAttr;
}