import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { Navbar, NavbarOptions } from '../index';

/* eslint-disable-next-line */
export interface HeaderProps {}

const navbarOptions = [
  { text: 'Host', target: 'host' },
  { text: 'About', target: 'about' },
  { text: 'Vans', target: 'vans' },
] as NavbarOptions;

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <Link to="/" className={styles['header-title']}>
        #VANLIFE
      </Link>
      <Navbar options={navbarOptions} />
    </div>
  );
}

export default Header;
