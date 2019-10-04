/* eslint-disable no-console */
import { Router } from 'express';
import { signin, signup } from '../controllers/auth.controllers';

const route = new Router();

route.post('/signup', signup);
route.post('/signin', signin);

export default route;
