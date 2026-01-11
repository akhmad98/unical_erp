import { UpdateProductDTO } from '../DTO/update-product.dto';
import { IProductService } from '../interfaces/IProductService.ts';
import { TrackingType } from '../enums/Tracking.ts';
import { ProductStatus } from '../enums/ProductStatus.ts';
import { CreateProductDTO } from '../DTO/create-product.dto.ts';

export class ProductService implements IProductService{
    public validateUniqueSKUForVariant(value: string): boolean {
        const regStr: RegExp = new RegExp(/\b([a-zA-Z]+)-([XSML]{1,3})\b/g);
        
        if (value.match(regStr)) {
            return true;
        }
        return false;
    }

    public validateUniqueSKU(value: string): boolean {
        return true;
    }

    public validateTrackingType(value: string): boolean {
        const tipes: Array<string> = Object.values(TrackingType);
        if (tipes.includes(value)) {
            return true;
        }
        return false;
    }

    public checkForConfirmedAndRefactor(status: string, value: UpdateProductDTO): Partial<UpdateProductDTO> | UpdateProductDTO {
        if (status === ProductStatus.CONFIRMED) {
            const refactoredResult: Partial<UpdateProductDTO> = {
                name: value.name,
                barcode: value.barcode,
                min_stock_level: value.min_stock_level,
                price: value.price,
                is_active: value.is_active,
            }
            return refactoredResult;
        }
        return value;
    }

    public checkForVariantParent(value: string, passValue: CreateProductDTO): boolean {
        for (const child of passValue.variants) {
            if (Object.keys(child.variant_attributes).length !== 2
                || (new Set(
                    [...Object.keys(child.variant_attributes), 'size', 'color']
                )).size !== 2 )  {
                    return false;
            }
        }
        return true
    }
}