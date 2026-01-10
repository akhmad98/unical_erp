import express from 'express';
import { product } from './controller/product.js';
// import { sales } from './controller/sales.js';
// import { dashboard } from './controller/dashboard.js';
// import { purchaseReceipt } from './controller/purchase-receipt.js';

const app = express();

app.use(express.json());
app.use('/api/product', product);
// app.use('/api/purchase/receipt', purchaseReceipt);
// app.use('/api/sales', sales);
// app.use('/api/dash', dashboard);

export default app;