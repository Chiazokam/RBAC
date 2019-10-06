import { Router } from 'express';
import authRoute from './auth.routes';
import userRoute from './user.routes';
import productRoute from './product.routes';
import categoryRoute from './category.routes';
import messageRoute from './message.routes';

const route = new Router();

route.use('/auth', authRoute);
route.use('/', userRoute);
route.use('/', productRoute);
route.use('/', categoryRoute);
route.use('/', messageRoute);

export default route;
