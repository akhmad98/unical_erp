import express from 'express';
import { handleProductController } from './controller/product';
import { ProductInteractor } from './interactors/product-interactor';
import { ProductRepository } from './repos/product-reposityory';
import { ProductService } from './services/product-service';

const app = express();
const productRepo = new ProductRepository();
const productService = new ProductService();
const productInteractor = new ProductInteractor(productRepo, productService);

app.use(express.json());
app.use('/api/product').post('/create', handleProductController(productInteractor).create);
app.use('/api/product').patch('/update/:product_id', handleProductController(productInteractor).update);
app.use('/api/product').delete('/del/:product_id', handleProductController(productInteractor).softDelete);

// app.use('/api/purchase/receipt', purchaseReceipt);
// app.use('/api/sales', sales);
// app.use('/api/dash', dashboard);

export default app;