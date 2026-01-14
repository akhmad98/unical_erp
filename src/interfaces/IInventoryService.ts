import { IStockAvailability } from "./IStockAvailability";

export interface IInventoryService {
    increaseStock(productId: string, quantity: number, emailby: string): Promise<void>;
    decreaseStock(productId: string, quantity: number, emailby: string): Promise<void>;
    checksAvailability(productId: string, quantity: number, emailby: string): Promise<IStockAvailability>;
}