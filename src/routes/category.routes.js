/* eslint-disable no-console */
import { Router } from 'express';
import {
  createCategory, getCategories, updateCategory, deleteCategory,
} from '../controllers/category.controllers';
import { isUserSignedIn, grantAccess } from '../middlewares/auth.middlewares';

const route = new Router();

route.post('/categories', isUserSignedIn, grantAccess('createAny', 'category'), createCategory);
route.get('/categories', getCategories);
route.patch('/categories/:id', isUserSignedIn, grantAccess('updateAny', 'category'), updateCategory);
route.delete('/categories/:id', isUserSignedIn, grantAccess('deleteAny', 'category'), deleteCategory);

export default route;
