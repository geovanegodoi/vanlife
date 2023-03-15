import { useAuthentication } from '@vanlife/login';
import { Link } from 'react-router-dom';
import styles from './logout.module.css';

/* eslint-disable-next-line */
export interface LogoutProps {}

export function Logout(props: LogoutProps) {
  const { loggedIn, signout } = useAuthentication();

  return loggedIn ? (
    <div className={styles['container']}>
      <Link to="." onClick={() => signout()} style={{ textDecoration: 'none' }}>
        Logout
      </Link>
    </div>
  ) : (
    <></>
  );
}

export default Logout;
