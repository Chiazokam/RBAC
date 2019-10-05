/* eslint-disable no-console */
import { Router } from 'express';
import {
  getClients, getEmployees, deleteRole, updateRole,
} from '../controllers/user.controllers';

const route = new Router();

route.get('/clients', getClients);
route.get('/employees', getEmployees);
route.patch('/employees/:id', updateRole('employee'));
route.patch('/clients/:id', updateRole('client'));
route.delete('/employees/:id', deleteRole('employee'));
route.delete('/clients/:id', deleteRole('client'));

export default route;
