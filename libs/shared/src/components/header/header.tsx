import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { FlexGrow, Navbar, NavbarOptions } from '../index';
import { OneOrMany } from '../../types';

const navbarOptions = [
  { text: 'Host', target: 'host' },
  { text: 'About', target: 'about' },
  { text: 'Vans', target: 'vans' },
] as NavbarOptions;

/* eslint-disable-next-line */
export interface HeaderProps {
  logout: OneOrMany<JSX.Element>;
}

export function Header({ logout }: HeaderProps) {
  return (
    <div className={styles['container']}>
      <Link to="/" className={styles['header-title']}>
        #VANLIFE
      </Link>
      <FlexGrow />
      <Navbar options={navbarOptions} />
      {logout}
    </div>
  );
}

export default Header;
