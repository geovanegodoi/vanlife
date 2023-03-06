import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
/* eslint-disable-next-line */
export interface NavbarProps {
  options: NavbarOption[];
}

export interface NavbarOption {
  text: string;
  target: string;
}

export function Navbar({ options }: NavbarProps) {
  const [current, setCurrent] = useState('');

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
