import dotenv from 'dotenv';
import { EventEmitter } from 'events';
import express, { Express, NextFunction, Request, Response } from 'express';

import { connectToDb } from './connectToDb';
import { uploadsDir } from './constants';
import { customCorsMiddleware } from './middleware/customCorsMiddleware';
import productsRouter from './routes/products';
import userRouter from './routes/user';
import { emptyStockMail } from './utils/emptyStockMail';
import { swaggerDocs } from './utils/swagger';

const app: Express = express();
const eventEmitter: EventEmitter = new EventEmitter();

dotenv.config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/uploads', express.static(uploadsDir));

app.use(customCorsMiddleware);

app.use((req: Request, res: Response, next: NextFunction) => {
  req.event = eventEmitter;
  next();
});

connectToDb();

app.use('/users', userRouter);
app.use('/products', productsRouter);

eventEmitter.on('emptyStock', emptyStockMail);

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(PORT, HOST, () => {
  swaggerDocs(app, PORT);
  console.log(`[ ready ] http://${HOST}:${PORT}`);
});
