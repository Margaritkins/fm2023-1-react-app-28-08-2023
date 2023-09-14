import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { SIGN_UP_USER_SCHEMA } from '../../../utils/validationSchemas';

const initialValues = {
  firstName: '',
  lastName: '',
  email:'',
  age: 18,
  isMale: false,
  password: '',
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
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form className="form">
            <label htmlFor="firstName" className="label">
              <span className="label_name">first name</span> 
              <Field type="text" id="firstName" name="firstName" className="input"/>
              <ErrorMessage component="span" name="firstName" className="error" />
            </label>
            <label className="label">
              <span className="label_name">last name</span>
              <Field type="text" name="lastName" className="input"/>
              <ErrorMessage component="span" name="lastName" className="error" />
            </label>
            <label className="label">
              <span className="label_name">email</span>
              <Field type="email" name="email" className="input"/>
              <ErrorMessage component="span" name="email" className="error" />
            </label>
            <label className="label">
              <span className="label_name">age</span>
              <Field type="number" name="age" className="input"/>
              <ErrorMessage component="span" name="age" className="error" />
            </label>
            <label className="label">
              <span className="label_name">password</span>
              <Field type="password" name="password" className="input"/>
              <ErrorMessage component="span" name="password" className="error" />
            </label>
            <label className="label">
              <span className="label_name">male</span>
              <Field type="checkbox" name="isMale" className="input"/>
              <ErrorMessage component="span" name="isMale" className="error" />
            </label>
            <input type="submit" value="send" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
