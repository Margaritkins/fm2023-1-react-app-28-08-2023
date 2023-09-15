import * as Yup from 'yup';

const NAME_SCHEMA = Yup.string('Error type! value must be string')
  .trim()
  .required('Required!')
  .matches(/^[A-Z][a-z]{1,31}$/, 'Перша буква повинна бути велика!');

const EMAIL_SCHEMA = Yup.string('Error type! value must be string')
  .trim()
  .required('Required!')
  .email()
  .min(7, 'Min length must 7')
  .max(64, 'Max length must 64');

export const SIGN_UP_USER_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  age: Yup.number().integer().min(18),
  isMale: Yup.boolean().required(),
  password: Yup.string('Error type! value must be string')
    .trim()
    .required('Required!')
    .matches(/.{8,128}/, 'Check yuor password'),
  confirmPassword: Yup.string('Error type! value must be string')
    .trim()
    .required('Required!')
    .oneOf([Yup.ref('password')], 'Check yuor password'),
});

export const CALLBACK_SCHEMA = Yup.object({
  quetion: Yup.string()
    .trim()
    .required('Required!')
    .min(3, 'Min length must 3')
    .max(64, 'Max length must 64'),
  email: EMAIL_SCHEMA,
});

// const SIGN_IN_USER_SCHEMA =

// const PHONE_USER_SCHEMA =
