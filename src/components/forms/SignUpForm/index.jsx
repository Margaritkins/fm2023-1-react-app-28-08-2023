import React from 'react';
import { Form, Formik } from 'formik';
import { SIGN_UP_USER_SCHEMA } from '../../../utils/validationSchemas';
import InputWrapper from '../InputWrapper';
import styles from './SignUpForm.module.scss';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: 18,
  isMale: false,
  password: '',
  confirmPassword:''
};

const SignUpForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    //console.log(formikBag);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_USER_SCHEMA}
    >
      <Form className="form">
        <InputWrapper name="firstName" labelName="first name" />
        <InputWrapper name="lastName" labelName="last name" />
        <InputWrapper type="email" name="email" labelName="email" />
        <InputWrapper type="number" name="age" labelName="age" />
        <InputWrapper type="password" name="password" labelName="password" />
        <InputWrapper type="password" name="confirmPassword" labelName="confirm password" />
        <InputWrapper
          type="checkbox"
          name="isMale"
          labelName="male"
          classes={styles.checkbox}
        />
        <input type="submit" value="send" />
      </Form>
    </Formik>
  );
};

export default SignUpForm;
