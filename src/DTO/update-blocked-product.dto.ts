import { IsString, IsNumber, IsBoolean } from "class-validator";

export class UpdateBlockedProductDTO {
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
}