/* eslint-disable no-console */
import { Router } from 'express';
import {
  getProducts, updateProduct, deleteProduct,
} from '../controllers/product.controllers';
import { isUserSignedIn, grantAccess } from '../middlewares/auth.middlewares';

const route = new Router();

route.get('/products', isUserSignedIn, grantAccess('readAny', 'product'), getProducts);
route.patch('/products/:id', isUserSignedIn, grantAccess('updateAny', 'product'), updateProduct);
route.delete('/products/:id', isUserSignedIn, grantAccess('deleteAny', 'product'), deleteProduct);

export default route;
