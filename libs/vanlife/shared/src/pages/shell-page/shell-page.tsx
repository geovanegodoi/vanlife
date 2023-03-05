import { Footer } from '../../ui/footer';
import { Navbar } from '../../ui/navbar';
import styles from './shell-page.module.css';

/* eslint-disable-next-line */
export interface ShellPageProps {
  children: JSX.Element | JSX.Element[];
}

export function ShellPage({ children }: ShellPageProps) {
  return (
    <>
      <Navbar />
      <div className={styles['container']}>{children}</div>
      <Footer />
    </>
  );
}

export default ShellPage;
