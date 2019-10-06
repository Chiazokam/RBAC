/* eslint-disable no-console */
import { Router } from 'express';
import {
  getProducts, updateProduct, deleteProduct, createProduct,
} from '../controllers/product.controllers';
import { isUserSignedIn, grantAccess } from '../middlewares/auth.middlewares';

const route = new Router();

route.post('/products', isUserSignedIn, grantAccess('createAny', 'product'), createProduct);
route.get('/products', getProducts);
route.patch('/products/:id', isUserSignedIn, grantAccess('updateAny', 'product'), updateProduct);
route.delete('/products/:id', isUserSignedIn, grantAccess('deleteAny', 'product'), deleteProduct);

export default route;
