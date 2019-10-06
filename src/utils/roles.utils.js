import AccessControl from 'accesscontrol';

const access = new AccessControl();

const roles = (() => {
  access.grant('client')
    .readOwn('client')
    .createOwn('client')
    .deleteOwn('client');

  access.grant('employee')
    .extend('client')
    .readAny('client')
    .readAny('employee');

  access.grant('supervisor')
    .extend('employee')
    .createAny('client')
    .createAny('employee')
    .createAny('product')
    .createAny('message')
    .createAny('category')
    .updateAny('client')
    .updateAny('employee')
    .updateAny('product')
    .updateAny('category')
    .deleteAny('client')
    .deleteAny('product')
    .deleteAny('category')
    .deleteAny('employee');
  return access;
})();

export default roles;
