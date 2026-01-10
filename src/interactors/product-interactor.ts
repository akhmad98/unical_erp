import { CreateProductDTO } from "../DTO/create-product.dto";
import { UpdateProductDTO } from "../DTO/update-product.dto";
import { IProduct } from "../interfaces/IProduct";
import { IProductInteractor } from "../interfaces/IProductInteractor";
import { IProductRepository } from "../interfaces/IProductRepository";
import { IProductService } from "../interfaces/IProductService";

export class ProductInteractor implements IProductInteractor {
    constructor(
        private productRepo: IProductRepository,
        private productSevice: IProductService
    ) {
    }

    public async addNewProduct(body: CreateProductDTO, emailby: string): Promise<IProduct> {
        
        const newProduct: IProduct = await this.productRepo.saveNewProduct(body, emailby);
        return newProduct;
    }

    public async updateProduct(productId: string, body: UpdateProductDTO, emailby: string): Promise<void> {
        
        await this.productRepo.updateAnProduct('', body, emailby);
    }

    public async deleteProduct(product_id: string, emailby: string): Promise<void> {
        
        await this.deleteProduct(product_id, emailby);
    }
}