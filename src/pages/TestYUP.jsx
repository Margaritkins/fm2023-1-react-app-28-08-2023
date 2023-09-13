import React from 'react';
import { SIGN_UP_USER_SCHEMA } from '../utils/validationSchemas';



const user = {
  firstName: 'Brad',
  lastName: 'Pitt',
  email: 'brad@gmail.com',
  age: 51,
  isMale: true,
  password: 123321354564,
};

const TestYUP = () => {
  SIGN_UP_USER_SCHEMA.isValid(user).then((data) => console.log(data));
  SIGN_UP_USER_SCHEMA.validate(user).then((data) => console.log(data));
  //console.log(SIGN_IN_USER_SCHEMA.isValid(user));
  //console.log(SIGN_IN_USER_SCHEMA.validateSync(user));
  return <div></div>;
};

export default TestYUP;
