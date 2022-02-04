import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import { routes } from './routes';
import './database/connection';
import { CustomException } from './exceptions/CustomException';

const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
    (
        error: CustomException | Error,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        if (error instanceof CustomException) {
            return res.status(error.code).send(error.message);
        }

        console.error(error.message);
        return res.status(500).send('Internal Error.');
    });

app.listen(port, () => console.log(`Backend is running on port ${port}...`));