import styles from './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles['container']}>
      <label className={styles['navbar-title']}>#VANLIFE</label>
      <div>
        <a href="/">About</a>
        <a href="/">Vans</a>
      </div>
    </div>
  );
}

export default Navbar;
