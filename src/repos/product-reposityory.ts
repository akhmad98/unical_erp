import AppDataSource from "../config/db";
import { IProduct } from "../interfaces/IProduct";
import { Product } from "../entities/Product";
import { CreateProductDTO } from "../DTO/create-product.dto";
import { ProductStatus } from "../enums/ProductStatus";
import { User } from "../entities/User";
import { UpdateProductDTO } from "../DTO/update-product.dto";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
    private readonly _db;
    
    constructor() {
       this. _db = AppDataSource;
    }

    public async saveNewProduct(body: CreateProductDTO, emailby: string): Promise<IProduct> {
        const dbProduct = this._db.getMongoRepository(Product);
        const dbUsers = this._db.getMongoRepository(User);
        const whoisit = await dbUsers.findOneBy({ email: emailby })

        const newProduct = new Product();
        newProduct.barcode = body.barcode;
        newProduct.comment = '';
        newProduct.edited_at = new Date();
        newProduct.edited_by = `${whoisit?.firstname} ${whoisit?.secondname}, ${whoisit?.role}`;
        newProduct.is_active = true;
        newProduct.name = body.name;
        newProduct.sku = body.sku;
        newProduct.status = ProductStatus.DRAFT;
        newProduct.tracking_type = body.tracking_type;
        newProduct.unit_of_measure = body.unit_of_measure;
        newProduct.variant_attributes = body.variant_attributes || null;

        const addedProduct = await dbProduct.save(newProduct);
        return addedProduct;
    }

    public async updateAnProduct(productId: string, body: UpdateProductDTO, emailby: string) {
        const dbProduct = this._db.getMongoRepository(Product);
        const productFound = await dbProduct.findOneBy({ id: productId});
        const dbUsers = this._db.getMongoRepository(User);
        const whoisit = await dbUsers.findOneBy({ email: emailby });

        if (productFound) {
            productFound.barcode = body.barcode;
            productFound.is_active = body.is_active;
            productFound.min_stock_level = body.min_stock_level;
            productFound.name = body.name;
            productFound.sku = body.sku;
            productFound.tracking_type = body.tracking_type;
            productFound.edited_at = new Date();
            productFound.edited_by = `${whoisit?.firstname} ${whoisit?.secondname}, ${whoisit?.role}`;

            await dbProduct.save(productFound);
        } else {
            throw new Error('Product not found!');
        }
    }

    public async deleteProduct(productId: string, emailby: string) {
        const dbProduct = this._db.getMongoRepository(Product);
        const productFound = await dbProduct.findOneBy({ _id: productId});
        const dbUsers = this._db.getMongoRepository(User);
        const whoisit = await dbUsers.findOneBy({ email: emailby })

        if (productFound) {
            productFound.status = ProductStatus.CANCELLED;
            productFound.is_active = false;
            productFound.comment = '';
            productFound.edited_at = new Date();
            productFound.edited_by = `${whoisit?.firstname} ${whoisit?.secondname}, ${whoisit?.role}`;

            await dbProduct.save(productFound);
        }
    }
}