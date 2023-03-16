import styles from './logout.module.css';
import { Link } from 'react-router-dom';
import logout from '../../assets/logout.svg';
import { useAuthentication } from '../../contexts';

/* eslint-disable-next-line */
export interface LogoutProps {}

export function Logout(props: LogoutProps) {
  const { loggedIn, signout } = useAuthentication();

  return loggedIn ? (
    <div className={styles['container']}>
      <Link to="." onClick={() => signout()} style={{ textDecoration: 'none' }}>
        Logout
      </Link>
      <img src={logout} />
    </div>
  ) : (
    <></>
  );
}

export default Logout;
