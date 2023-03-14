import styles from './login-page.module.css';
import { LoginForm } from '../../components';
import {
  ActionFunctionArgs,
  useActionData,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { doLogin, retrieveFormData } from './login-page.helpers';
import { useEffect, useState } from 'react';
import { useAuthentication } from '../../contexts/AuthenticationContext';

/* eslint-disable-next-line */
export interface LoginPageProps {}

interface ActionLoginData {
  user?: { email: string; password: string };
  token?: string;
  error?: string;
}

export async function actionLogin({
  request,
}: ActionFunctionArgs): Promise<ActionLoginData> {
  const postData = await retrieveFormData(request);

  if (postData) {
    return doLogin(postData);
  }

  return {
    error: 'Invalid username or password',
  };
}

export function LoginPage(props: LoginPageProps) {
  const { loggedIn, signin } = useAuthentication();
  const actionData = useActionData() as ActionLoginData;
  const location = useLocation();
  const navigate = useNavigate();

  // console.log('actionData', actionData);
  // console.log('location.state', location.state);
  // console.log('navigation.location', navigation.location);

  if (loggedIn || actionData?.token) {
    const redirectUrl = location.state?.redirectUrl || '/host';
    // console.log(redirectUrl);
    signin(() => {
      navigate(redirectUrl, { replace: true });
    });
  }

  return (
    <div className={styles['container']}>
      <h1>Sign in to your account</h1>
      {location.state?.message && (
        <h3 className={styles['location-error']}>{location.state?.message}</h3>
      )}
      <LoginForm />
      {actionData?.error && (
        <h3 className={styles['action-error']}>{actionData?.error}</h3>
      )}
    </div>
  );
}

export default LoginPage;
