import AppDataSource from "../config/db";
import { IInventoryRepository } from "../interfaces/IInvenoryRepository";
import { Product } from "../entities/Product";
import { User } from "../entities/User";
import { ProductStatus } from "../enums/ProductStatus";

export class Inventoryrepository implements IInventoryRepository {
    private readonly _db;

    constructor() {
        this._db = AppDataSource
    }

    public async incrementInventory(productId: string, qnty: number, emailby: string): Promise<void> {
        const dbProduct = this._db.getMongoRepository(Product);
        const dbUsers = this._db.getMongoRepository(User);
        const whoisit = await dbUsers.findOneBy({ email: emailby });

        await dbProduct.increment({ product_id: productId }, "unit_of_measure", qnty);
    }

    public async decrementInventory(productId: string, qnty: number, emailby: string): Promise<void> {
        const dbProduct = this._db.getMongoRepository(Product);
        const dbUsers = this._db.getMongoRepository(User);
        const whoisit = await dbUsers.findOneBy({ email: emailby });
        
        await dbProduct.decrement({ product_id: productId }, "unit_of_measure", qnty);
    }

    public async checksAvailable(productId: string, qnty: number, emailby: string) {
        const dbProduct = this._db.getMongoRepository(Product);
        const dbUsers = this._db.getMongoRepository(User);

        const foundProduct = await dbProduct.findOneBy({ id: productId});
        if (!foundProduct || foundProduct.is_active === false || foundProduct.status === ProductStatus.CANCELLED) {
            throw new Error('Product not found!');
        }

        if (foundProduct?.min_stock_level) {
            if (foundProduct.min_stock_level > 0 && qnty < foundProduct?.min_stock_level) {
                return {
                    result: true,
                }
            } else {
                return {
                    result: false,
                    recommended: foundProduct.min_stock_level
                }
            }
        }

        return {
            result: false
        }
    }
}