import { ChangeEvent, FormEvent, useState } from 'react';
import { Form } from 'react-router-dom';
import styles from './login-form.module.css';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export enum LoginFormFields {
  Email = 'email',
  Password = 'password',
}

export function LoginForm(props: LoginFormProps) {
  return (
    <div className={styles['login-container']}>
      <Form className={styles['login-form']} action="/login" method="post">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button>Log in</button>
      </Form>
    </div>
  );
}

export default LoginForm;
