import express, { Response, Request } from 'express';
import { ProductService } from '../services/product-service.js';
import { CreateProductDTO } from '../DTO/create-product.dto.ts';
import { UpdateProductDTO } from '../DTO/update-product.dto.ts';
import { authMiddleware } from '../middleware/authMiddleware.ts';
import { ProductInteractor } from '../interactors/product-interactor.ts';

export const handleProductController = (productInteractor: ProductInteractor) => {
    const create = async (req: Request, res: Response) => {
        try {
            const email: string | null = String(req.userEmail);
            if (!email) throw new Error('Unauthorized!');
            const body: CreateProductDTO = req.body;
            if (!body) throw new Error('Details not provided!');
            const result = await productInteractor.addNewProduct(body, email);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error});
        }
    }

    const update = async (req: Request, res: Response) => {
        try {
            const email: string | null = String(req.userEmail);
            if (!email) throw new Error('Unauthorized!');
            const body: UpdateProductDTO = req.body;
            if (!body) throw new Error('Details not provided!');
            const productId: string = req.params.product_id;
            if (!productId) throw new Error('Identifier not defined!');
            await productInteractor.updateProduct(productId, body, email);
            return res.status(200).json({ message: 'Successfully updated!' });
        } catch (error) {
            return res.status(400).json({ error: error});   
        }
    }

    const softDelete = async (req: Request, res: Response) => {
        try {
            const email: string | null = String(req.userEmail);
            if (!email) throw new Error('Unauthorized!');
            const productId: string = req.params.product_id;
            if (!productId) throw new Error('Identifier not defined!');
            await productInteractor.deleteProduct(productId, email);
            return res.status(200).json({ message: 'Succesfully deleted!' });
        } catch (error) {
            return res.status(400).json({ error: error});   
        }
    }

    return { create, update, softDelete };
}
