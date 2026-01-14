import AppDataSource from "../config/db";
import { IInventoryRepository } from "../interfaces/IInvenoryRepository";
import { Inventory } from "../entities/Inventory";
import { IProduct } from "../interfaces/IProduct";
import { TrackingType } from "../enums/Tracking";

export class Inventoryrepository implements IInventoryRepository {
    private readonly _db;

    constructor() {
        this._db = AppDataSource
    }

    public async getInventory(productId: string): Promise<Inventory | null> {
        const inventoryDb = this._db.getMongoRepository(Inventory);
        
        const found = await inventoryDb.findOneBy({ product_id: productId});
        
        return found;
    }
    public async saveNewInventory(warehouseId: string, item: IProduct): Promise<void> {
        const inventoryDb = this._db.getMongoRepository(Inventory);
        const newInventory = new Inventory();
        newInventory.edited_at = new Date();
        newInventory.warehouse_id = warehouseId;
        newInventory.product_id = item.product_id;
        newInventory.items = item.tracking_type === TrackingType.VARIANT ?
        item.variants : new Array(item);
        await inventoryDb.save(newInventory);
    }

    public async updateInventory(productId: string, item: IProduct): Promise<void> {
        const inventoryDb = this._db.getMongoRepository(Inventory);

        await inventoryDb.updateOne(
            { product_id: productId },
            {
                $set: {
                    edited_at: new Date(),
                    items: item.tracking_type === TrackingType.VARIANT ?
                        item.variants : new Array(item)
                }
            }
        );
    }

    public async checksAvailable(productId: string, sku: string, qnty: number) {
        const inventoryDb = this._db.getMongoRepository(Inventory);

        const foundBy = await inventoryDb.findOneBy({
            "items.sku": sku, product_id: productId, is_active: true
        })

        if (!foundBy) {
            throw new Error('Product not found!');
        }
        const found = foundBy.items?.filter(el => el.sku === sku)[0];
        if (found?.unit_of_measure) {
            if (found.unit_of_measure > 0 && qnty < found?.unit_of_measure) {
                return {
                    result: true,
                }
            } else {
                return {
                    result: false,
                    recommended: found.min_stock_level
                }
            }
        }

        return {
            result: false
        }
    }
}