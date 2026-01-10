import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import { PurchaseReceipt } from "../entities/PurchaseReceipt";
import { Sale } from "../entities/Sale";
import { Warehouse } from "../entities/Warehouse";


const myDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [Product, PurchaseReceipt, Sale, Warehouse],
})