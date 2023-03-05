import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles['container']}>
      <Link to="/" className={styles['navbar-title']}>
        #VANLIFE
      </Link>
      <div>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </div>
  );
}

export default Navbar;
