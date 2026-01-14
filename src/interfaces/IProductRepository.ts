import { CreateProductDTO } from "../DTO/create-product.dto";
import { UpdateProductDTO } from "../DTO/update-product.dto";
import { IProduct } from "./IProduct";

export interface IProductRepository {
    saveNewProduct(body: CreateProductDTO, emailby: string): Promise<IProduct>;
    updateAnProduct(productId: string, body: UpdateProductDTO | Partial<UpdateProductDTO>, emailby: string): void;
    deleteProduct(productId: string, emailby: string): void;
    incrementQnty(productId: string, qnty: number, emailby: string): Promise<IProduct>;
    decrementQnty(productId: string, qnty: number, emailby: string): Promise<IProduct>;
}