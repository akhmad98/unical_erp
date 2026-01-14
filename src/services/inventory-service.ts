import { IInventoryRepository } from "../interfaces/IInvenoryRepository";
import { IInventoryService } from "../interfaces/IInventoryService";
import { IProductRepository } from "../interfaces/IProductRepository";
import { IStockAvailability } from "../interfaces/IStockAvailability";
import { IProduct } from "../interfaces/IProduct";

export class InventoryService implements IInventoryService {
    constructor(
        private inventoryRepo: IInventoryRepository,
        private productRepo: IProductRepository,
    ) {
    }

    public async increaseStock(productId: string, quantity: number, emailby: string): Promise<void> {
        const result: IProduct = await this.productRepo.incrementQnty(productId, quantity, emailby);
        const found = await this.inventoryRepo.getInventory(productId);
        if (!found) {
            await this.inventoryRepo.saveNewInventory('waregouseId', result);
        }
        await this.inventoryRepo.updateInventory(productId, result);
    }

    public async decreaseStock(productId: string, quantity: number, emailby: string): Promise<void> {
        const result: IProduct = await this.productRepo.decrementQnty(productId, quantity, emailby);
        const found = await this.inventoryRepo.getInventory(productId);
        if (!found) {
            await this.inventoryRepo.saveNewInventory('waregouseId', result);
        }
        await this.inventoryRepo.updateInventory(productId, result);
    }

    public async checksAvailability(productId: string, quantity: number, emailby: string): Promise<IStockAvailability> {
        const result: IStockAvailability = await this.inventoryRepo.checksAvailable(productId, '', quantity);
        return result;
    }
}