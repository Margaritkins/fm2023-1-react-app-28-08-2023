import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import cx from 'classnames';
import styles from './InputInnerProps.module.scss';

const InputInnerProps = ({ type, name, titleLabel }) => {
  return (
    <label className={styles.label}>
      <span>{titleLabel}</span>
      <Field name={name}>
        {({ field, meta }) => {
          const classNames = cx(styles.input, {
            [styles.invalid]: meta.touched && meta.error,
          });
          return <input type={type} {...field} className={classNames} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

InputInnerProps.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  titleLabel: PropTypes.string,
};

export default InputInnerProps;
