import { Router } from 'express';
import authRoute from './auth.routes';
import userRoute from './user.routes';
import productRoute from './product.routes';

const route = new Router();

route.use('/auth', authRoute);
route.use('/', userRoute);
route.use('/', productRoute);

export default route;
