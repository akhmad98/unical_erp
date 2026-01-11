import { CreateProductDTO } from "../DTO/create-product.dto";
import { UpdateProductDTO } from "../DTO/update-product.dto";

export interface IProductService {
    validateUniqueSKUForVariant(value: string): boolean;
    validateUniqueSKU(value: string): boolean;
    validateTrackingType(value: string): boolean;
    checkForConfirmedAndRefactor(status: string, valuesForUpdate: UpdateProductDTO): Partial<UpdateProductDTO> | UpdateProductDTO;
    checkForVariantParent(value: string, passValues: CreateProductDTO): boolean;
}