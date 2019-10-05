import { Router } from 'express';
import authRoute from './auth.routes';
import userRoute from './user.routes';

const route = new Router();

route.use('/auth', authRoute);
route.use('/', userRoute);

export default route;
