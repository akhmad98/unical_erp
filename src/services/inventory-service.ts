import { IInventoryRepository } from "../interfaces/IInvenoryRepository";
import { IInventoryService } from "../interfaces/IInventoryService";
import { IStockAvailability } from "../interfaces/IStockAvailability";

export class InventoryService implements IInventoryService {
    constructor(
        private inventoryRepo: IInventoryRepository
    ) {
    }

    public async increaseStock(productId: string, quantity: number): Promise<void> {

    }

    public async decreaseStock(productId: string, quantity: number): Promise<void> {

    }

    public async checksAvailability(productId: string, quantity: number): Promise<IStockAvailability> {
        return {
            result: true,
        };
    }
}