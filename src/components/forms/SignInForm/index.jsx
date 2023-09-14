import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SignInForm.module.css';
const initialValues = {
  email: '',
  password: '',
  emailValid: true,
  passwordValid: true,
  check: false,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    //event.target.reset();
    this.setState({ ...initialValues });
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [`${name}Valid`]: value.includes(' ') === false,
    });
  };

  handleCheckbox = ({ target: { name, checked } }) => {
    this.setState({ [name]: checked });
  };

  render() {
    const { check, email, password, emailValid, passwordValid } = this.state;

    const classesEmail = cx(styles.input, { [styles.invalid]: !emailValid });
    const classesPassword = cx(styles.input, {
      [styles.invalid]: !passwordValid,
    });

    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        <div>
          <h2>hw 01-09-2023</h2>
          <p>додати інпут з name='login' з валідацією</p>
          <p>додати інпут з name='check' з type="checkbox"</p>
          <p>додати групу інпутів з name='radio' з type="radio"</p>
        </div>
        <label>
          <input
            onChange={this.handleCheckbox}
            checked={check}
            type="checkbox"
            name="check"
            placeholder="your email"
          />
          check me
        </label>
        <input
          className={classesEmail}
          value={email}
          onChange={this.handleInput}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={classesPassword}
          value={password}
          onChange={this.handleInput}
          type="password"
          name="password"
          placeholder="your password"
        />
        <button type="submit">send</button>
      </form>
    );
  }
}

export default SignInForm;
