import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { PurchaseReceipt } from "../entities/PurchaseReceipt";
import { Sale } from "../entities/Sale";
import { Warehouse } from "../entities/Warehouse";


const AppDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 3306,
    username: "test",
    entities: [Product, PurchaseReceipt, Sale, Warehouse],
    logging: ["query", "error"]
})

try {
    await AppDataSource.initialize();
    console.log("Data source has been initialized!");
} catch (err) {
    console.error("Error occured!", err);

}

export default AppDataSource;