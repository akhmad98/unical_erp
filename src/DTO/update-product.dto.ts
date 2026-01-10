import { IsUUID, IsEnum, IsString, IsNumber, ValidateIf, IsBoolean } from "class-validator";
import { TrackingType } from "../enums/Tracking";

export class UpdateProductDTO {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly barcode: number;

    @IsNumber()
    readonly min_stock_level: number;

    @IsNumber()
    readonly price: number

    @IsBoolean()
    readonly is_active: boolean
    
    @IsUUID()
    readonly sku: string;

    @IsEnum(TrackingType, { message: 'Invalid type provided!'})
    readonly tracking_type: TrackingType;
}