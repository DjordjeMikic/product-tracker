import { Router } from 'express';

import { checkIsLoggedIn } from '../controllers/users/checkIsLoggedIn';
import { createUser } from '../controllers/users/createUser';
import { getUser } from '../controllers/users/getUser';
import { signInUser } from '../controllers/users/signInUser';
import { signOutUser } from '../controllers/users/signOutUser';
import { userAuthenticated } from '../middleware/userAuthenticated';
import { userExists } from '../middleware/userExists';

const router = Router();

/**
 * @swagger
 * /users/:id:
 *   get:
 *     tags:
 *       - User endpoints
 *     description: Get users by id
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
 *                fullName:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                verified:
 *                  type: boolean
 *                __v:
 *                  type: number
 *                products:
 *                  type: array
 *                  items:
 *                    type: string
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
router.get('/:id', getUser);

/**
 * @swagger
 * /users/signin:
 *   post:
 *     tags:
 *       - User endpoints
 *     description: Sign in user
 *     requestBody:
 *       description: Payload to send
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Success
 *         headers:
 *           Set-Cookie:
 *             description: 'Authorization cookie'
 *             schema:
 *               type: string
 *             examples:
 *               sessionCookie:
 *                 value: 'Authorization=your_token; Path=/'
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                fullName:
 *                  type: string
 *                email:
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
router.post('/signin', signInUser);

/**
 * @swagger
 * /users/signup:
 *   post:
 *     tags:
 *       - User endpoints
 *     description: Sign up user
 *     requestBody:
 *       description: Payload to send
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
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
 *       400:
 *         description: Bad credentials
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
router.post('/signup', userExists, createUser);

/**
 * @swagger
 * /users/signout:
 *   post:
 *     tags:
 *       - User endpoints
 *     description: Sign out user (clear Authorization cookie from browser)
 *     parameters:
 *       - name: Cookie
 *         in: header
 *         description: The authentication cookie if it is empty response is 401
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
 */
router.post('/signout', userAuthenticated, signOutUser);

/**
 * @swagger
 * /users/is-auth:
 *   post:
 *     tags:
 *       - User endpoints
 *     description: Check is user signed in *
 *     parameters:
 *       - name: Cookie
 *         in: header
 *         description: The authentication cookie if it is empty response is 401
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
 *                fullName:
 *                  type: string
 *                email:
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
 */
router.post('/is-auth', checkIsLoggedIn);

export default router;
