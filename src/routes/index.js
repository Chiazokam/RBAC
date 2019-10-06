import { Router } from 'express';
import authRoute from './auth.routes';
import userRoute from './user.routes';
import productRoute from './product.routes';
import categoryRoute from './category.routes';

const route = new Router();

route.use('/auth', authRoute);
route.use('/', userRoute);
route.use('/', productRoute);
route.use('/', categoryRoute);

export default route;
