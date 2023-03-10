import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {
  options: NavbarOption[];
  defaultOption?: string;
}

export interface NavbarOption {
  text: string;
  target: string;
  end?: boolean;
}

export function Navbar({ options, defaultOption }: NavbarProps) {
  return (
    <div className={styles['container']}>
      {options.map((item) => (
        <NavLink
          key={item.text}
          to={item.target}
          className={({ isActive }) =>
            styles[isActive ? 'navbar-link-current' : 'navbar-link']
          }
          end={item.end}
        >
          {item.text}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
