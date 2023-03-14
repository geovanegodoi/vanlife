import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { FlexGrow, Navbar, NavbarOptions } from '../index';
import Logout from '../logout/logout';
import { useAuthentication } from '@vanlife/vanlife/login';

/* eslint-disable-next-line */
export interface HeaderProps {}

const navbarOptions = [
  { text: 'Host', target: 'host' },
  { text: 'About', target: 'about' },
  { text: 'Vans', target: 'vans' },
] as NavbarOptions;

export function Header(props: HeaderProps) {
  const { loggedIn } = useAuthentication();
  return (
    <div className={styles['container']}>
      <Link to="/" className={styles['header-title']}>
        #VANLIFE
      </Link>
      <FlexGrow />
      <Navbar options={navbarOptions} />
      {loggedIn && <Logout />}
    </div>
  );
}

export default Header;
