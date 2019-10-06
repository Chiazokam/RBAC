/* eslint-disable no-console */
import { Router } from 'express';
import createMessage from '../controllers/message.controllers';
import { isUserSignedIn, grantAccess } from '../middlewares/auth.middlewares';

const route = new Router();

route.post('/messages', isUserSignedIn, grantAccess('createAny', 'message'), createMessage);

export default route;
