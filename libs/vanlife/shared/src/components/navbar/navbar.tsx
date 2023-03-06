import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
/* eslint-disable-next-line */
export interface NavbarProps {
  options: NavbarOption[];
  defaultOption?: string;
}

export interface NavbarOption {
  text: string;
  target: string;
}

export function Navbar({ options, defaultOption }: NavbarProps) {
  const [current, setCurrent] = useState(defaultOption || '');

  function getClassName(item: NavbarOption): string {
    return styles[
      current === item.text ? 'navbar-link-current' : 'navbar-link'
    ];
  }

  return (
    <div className={styles['container']}>
      {options.map((item) => (
        <Link
          key={item.text}
          to={item.target}
          onClick={() => setCurrent(item.text)}
          className={getClassName(item)}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
