import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import cx from 'classnames';
import styles from './InputWrapper.module.scss';

const InputWrapper = ({ type, name, labelName, classes, ...options }) => {
  const classNames = cx(styles.label, classes)
  return (
    <label className={classNames} {...options}>
      <span className={styles.label_name}>{labelName}</span>
      <Field type={type} name={name} className={styles.input} />
      <ErrorMessage component="span" name={name} className={styles.error} />
    </label>
  );
};

InputWrapper.defaultProps = {
  type: 'text',
  labelName: 'text',
  classes:null,
};

InputWrapper.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  classes:PropTypes.string
};

export default InputWrapper;
