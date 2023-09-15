import React from 'react';
import { Formik, Form } from 'formik';
import InputInnerProps from '../InputInnerProps';
import { CALLBACK_SCHEMA } from '../../../utils/validationSchemas';

const initialValues = {
  quetion: '',
  email: '',
};

const CallbackForm = (props) => {
  //const { onSubmit } = props;
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={CALLBACK_SCHEMA}>
      <Form>
        <InputInnerProps type='text' name='quetion' titleLabel='quetion'/>
        <InputInnerProps type='email' name='email' titleLabel='email'/>
        <button type="submit">send quetion</button>
      </Form>
    </Formik>
  );
};

export default CallbackForm;
