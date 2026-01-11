export interface IInventoryRepository {
    incrementInventory(): Promise<void>;
    decrementInventory(): Promise<void>;
}