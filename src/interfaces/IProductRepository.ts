import { CreateProductDTO } from "../DTO/create-product.dto";
import { UpdateProductDTO } from "../DTO/update-product.dto";
import { IProduct } from "./IProduct";

export interface IProductRepository {
    saveNewProduct(body: CreateProductDTO, emailby: string): Promise<IProduct>;
    updateAnProduct(productId: string, body: UpdateProductDTO, emailby: string): void;
    deleteProduct(product_id: string, emailby: string): void;
}