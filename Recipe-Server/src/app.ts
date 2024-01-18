import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client';

const app: Application = express();

//using cors
app.use(cors());
app.use(cookieParser());

const prisma = new PrismaClient();
prisma.$connect();
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Welcome to recipe server',
    data: {
      message: 'How can i help you sir?',
    },
  });
});

//import route
import globalErrorHandler from './app/middlewares/globalErrorHandler';

import apiHandleNotFound from './app/middlewares/apiHandleNotFound';
import httpStatus from 'http-status';
import router from './app/routes';

//add custom api route
app.use('/api/v1', router);

//global error handler
app.use(globalErrorHandler);

// handle not found
app.use(apiHandleNotFound);

export default app;
