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
    .updateAny('client')
    .updateAny('employee')
    .deleteAny('client')
    .deleteAny('employee');
  return access;
})();

export default roles;
