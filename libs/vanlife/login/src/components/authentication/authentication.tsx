import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthentication } from '../../contexts/AuthContext';
import styles from './authentication.module.css';

/* eslint-disable-next-line */
export interface AuthenticationProps {}

export function Authentication(props: AuthenticationProps) {
  const { loggedIn } = useAuthentication();
  const location = useLocation();

  return loggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{
        message: 'You must log in first',
        redirectUrl: location.pathname,
      }}
      replace
    />
  );
}

export default Authentication;
