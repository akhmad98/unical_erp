import { Inventory } from "../entities/Inventory";
import { IProduct } from "./IProduct";
import { IStockAvailability } from "./IStockAvailability";

export interface IInventoryRepository {
    saveNewInventory(warehouseId: string, item: IProduct): Promise<void>;
    updateInventory(productId: string, item: IProduct): Promise<void>;
    getInventory(productId: string): Promise<Inventory | null>;
    checksAvailable(productId: string, sku: string, qnty: number): Promise<IStockAvailability>;
}