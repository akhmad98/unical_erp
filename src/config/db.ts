import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { PurchaseReceipt } from "../entities/PurchaseReceipt";
import { Sale } from "../entities/Sale";
import { Warehouse } from "../entities/Warehouse";


const AppDataSource = new DataSource({
    type: "mongodb",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
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