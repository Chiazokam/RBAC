/* eslint-disable no-console */
import { Router } from 'express';
import {
  getClients, getEmployees, deleteRole, updateRole,
} from '../controllers/user.controllers';
import { isUserSignedIn, grantAccess } from '../middlewares/auth.middlewares';

const route = new Router();

route.get('/clients', isUserSignedIn, grantAccess('readAny', 'client'), getClients);
route.get('/employees', isUserSignedIn, grantAccess('readAny', 'employee'), getEmployees);
route.patch('/employees/:id', isUserSignedIn, grantAccess('updateAny', 'employee'), updateRole('employee'));
route.patch('/clients/:id', isUserSignedIn, grantAccess('updateAny', 'client'), updateRole('client'));
route.delete('/employees/:id', isUserSignedIn, grantAccess('deleteAny', 'employee'), deleteRole('employee'));
route.delete('/clients/:id', isUserSignedIn, grantAccess('deleteAny', 'client'), deleteRole('client'));

export default route;
