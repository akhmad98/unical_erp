import { IStockAvailability } from "./IStockAvailability";

export interface IInventoryRepository {
    incrementInventory(productId: string, qnty: number, emailby: string): Promise<void>;
    decrementInventory(productId: string, qnty: number, emailby: string): Promise<void>;
    checksAvailable(productId: string, qnty: number, emailby: string): Promise<IStockAvailability>;
}