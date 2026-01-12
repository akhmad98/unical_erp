import { IStockAvailability } from "./IStockAvailability";

export interface IInventoryService {
    increaseStock(productId: string, quantity: number): Promise<void>;
    decreaseStock(productId: string, quantity: number): Promise<void>;
    checksAvailability(productId: string, quantity: number): Promise<IStockAvailability>;
}