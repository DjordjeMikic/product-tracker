import { Router } from 'express';

import { createProduct } from '../controllers/products/createProduct';
import { getProductById } from '../controllers/products/getProductById';
import { getProducts } from '../controllers/products/getProducts';
import { removeProduct } from '../controllers/products/removeProduct';
import { updateProduct } from '../controllers/products/updateProduct';
import { upload } from '../middleware/uploadImage';
import { userAuthenticated } from '../middleware/userAuthenticated';

const router = Router();

/**
 * @swagger
 * /products/id/:id:
 *   get:
 *     tags:
 *       - Products endpoints
 *     description: Get product by id
 *     parameters:
 *       - name: Cookie
 *         in: header
 *         description: The authentication cookie
 *         required: true
 *         schema:
 *           type: string
 *           format: cookie
 *           example: "Authorization=your_token; Path=/"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                productName:
 *                  type: string
 *                productDescription:
 *                  type: string
 *                productKey:
 *                  type: string
 *                stock:
 *                  type: string
 *                price:
 *                  type: string
 *                user:
 *                  type: string
 *                image:
 *                  type: string
 *                discount:
 *                  type: boolean
 *                __v:
 *                  type: number
 *       401:
 *         description: Unauthorized
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *       500:
 *         description: Server error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 */
router.get('/id/:id', userAuthenticated, getProductById);

/**
 * @swagger
 * /products/:userId/:page:
 *   get:
 *     tags:
 *       - Products endpoints
 *     description: Get product by user id and page
 *     parameters:
 *       - name: Cookie
 *         in: header
 *         description: The authentication cookie
 *         required: true
 *         schema:
 *           type: string
 *           format: cookie
 *           example: "Authorization=your_token; Path=/"
 *       - name: query
 *         in: query
 *         description: The search query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  productName:
 *                    type: string
 *                  productDescription:
 *                    type: string
 *                  productKey:
 *                    type: string
 *                  stock:
 *                    type: string
 *                  price:
 *                    type: string
 *                  user:
 *                    type: string
 *                  discount:
 *                    type: boolean
 *                  image:
 *                    type: string
 *                  __v:
 *                    type: number
 *       401:
 *         description: Unauthorized
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *       500:
 *         description: Server error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 */
router.get('/:userId/:page', userAuthenticated, getProducts);

/**
 * @swagger
 * /products/create:
 *   post:
 *     tags:
 *       - Products endpoints
 *     description: Create new product
 *     parameters:
 *       - name: Cookie
 *         in: header
 *         description: The authentication cookie
 *         required: true
 *         schema:
 *           type: string
 *           format: cookie
 *           example: "Authorization=your_token; Path=/"
 *     requestBody:
 *       description: Payload to send
 *       required: true
 *       content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              file:
 *                type: string
 *                format: binary *
 *              productName:
 *                type: string
 *              productKey:
 *                type: string
 *              productDescription:
 *                type: string
 *              stock:
 *                type: string
 *              price:
 *                type: string
 *              discount:
 *                type: boolean
 *              image:
 *                type: string
 *              _id:
 *                type: string
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *       500:
 *         description: Server error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 */
router.post('/create', userAuthenticated, upload.single('image'), createProduct);

/**
 * @swagger
 * /products/remove/:id:
 *   delete:
 *     tags:
 *       - Products endpoints
 *     description: Delete product
 *     parameters:
 *       - name: Cookie
 *         in: header
 *         description: The authentication cookie
 *         required: true
 *         schema:
 *           type: string
 *           format: cookie
 *           example: "Authorization=your_token; Path=/"
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *       500:
 *         description: Server error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 */
router.delete('/remove/:id', userAuthenticated, removeProduct);

/**
 * @swagger
 * /products/update/:id:
 *   put:
 *     tags:
 *       - Products endpoints
 *     description: Create new product
 *     parameters:
 *       - name: Cookie
 *         in: header
 *         description: The authentication cookie
 *         required: true
 *         schema:
 *           type: string
 *           format: cookie
 *           example: "Authorization=your_token; Path=/"
 *     requestBody:
 *       description: Payload to send
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              productName:
 *                type: string
 *              productKey:
 *                type: string
 *              productDescription:
 *                type: string
 *              stock:
 *                type: string
 *              price:
 *                type: string
 *              discount:
 *                type: boolean
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *       500:
 *         description: Server error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 */
router.put('/update/:id', userAuthenticated, updateProduct);

export default router;
