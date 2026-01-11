import { CreateProductDTO } from "../DTO/create-product.dto";
import { UpdateProductDTO } from "../DTO/update-product.dto";
import { IProduct } from "../interfaces/IProduct";
import { IProductInteractor } from "../interfaces/IProductInteractor";
import { IProductRepository } from "../interfaces/IProductRepository";
import { IProductService } from "../interfaces/IProductService";
import client from '../config/rd.ts';
import { ProductStatus } from "../enums/ProductStatus.ts";
import { TrackingType } from "../enums/Tracking.ts";

export class ProductInteractor implements IProductInteractor {
    constructor(
        private productRepo: IProductRepository,
        private productSevice: IProductService
    ) {
    }

    public async addNewProduct(body: CreateProductDTO, emailby: string): Promise<IProduct> {
        const isProperTracking: boolean = this.productSevice.validateTrackingType(body.tracking_type);
        if (!isProperTracking) {
            throw new Error('Out of type provided!');
        }
        let isAttrForVariantProvided: boolean = true;
        if (body.tracking_type === TrackingType.VARIANT) {
            isAttrForVariantProvided = this.productSevice.checkForVariantParent(body.tracking_type, body);
            const isuniqueSKUForVariants = await this.productSevice.validateUniqueSKUForVariant(body.sku);
            if (!isuniqueSKUForVariants) {
                throw new Error('SKU not validated!');
            }
        }
        
        if (!isAttrForVariantProvided) {
            throw new Error('Invalid details provided!');
        }

        const newProduct: IProduct = await this.productRepo.saveNewProduct(body, emailby);

        return newProduct;
    }

    public async updateProduct(productId: string, body: UpdateProductDTO, emailby: string): Promise<void> {
        const productStatusFromCache: string | null = await client.get(`${productId}stat:`);
        
        const properBodyDTO: UpdateProductDTO | Partial<UpdateProductDTO> = this.productSevice.checkForConfirmedAndRefactor(
            productStatusFromCache ? productStatusFromCache : ProductStatus.DRAFT, body);

        await this.productRepo.updateAnProduct(productId, properBodyDTO, emailby);
    }

    public async deleteProduct(product_id: string, emailby: string): Promise<void> {
        
        await this.productRepo.deleteProduct(product_id, emailby);
        await client.set(`${product_id}stat:`, ProductStatus.CANCELLED);
    }
}