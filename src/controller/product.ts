import express, { Response, Request } from 'express';
import { addNewProduct, updateProductDetails, deleteProduct } from '../services/product-service.js';
import { CreateProductDTO } from '../DTO/create-product.dto.ts';
import { UpdateProductDTO } from '../DTO/update-product.dto.ts';
import { authMiddleware } from '../middleware/authMiddleware.ts';
const router = express.Router();

router.route('/create').post(authMiddleware, async (req: Request, res: Response) => {
    const body: CreateProductDTO  = req.body;
    await addNewProduct(body);
    return res.json('Successfully inserted!');
})

router.route('/update/:id').patch(authMiddleware, async (req: Request, res: Response) => {
    const idFound: string | null = String(req.params.id);
    const body: UpdateProductDTO = req.body;
    await updateProductDetails(body);
    return res.json('Successfully updated!');
})


router.route('/delete/:id').delete(authMiddleware, async (req: Request, res: Response) => {
    const idFound: string | null = String(req.params.id);
    if (!idFound) {
        throw new Error('Invalid detail provided!');
    }

    await deleteProduct(idFound);
    return res.json('Successfully action done!')
})

export { router as product };
