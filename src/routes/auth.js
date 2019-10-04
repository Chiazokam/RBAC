/* eslint-disable no-console */
import { Router } from 'express';


const signup = (req, res) => {
  res.send(200, 'hi');
};

const route = new Router();

route.post('/signup', signup);

export default route;
