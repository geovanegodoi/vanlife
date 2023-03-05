import { Footer, Navbar } from '@vanlife/vanlife/shared';
import { AboutComponent } from '../../ui/main';
import styles from './main.module.css';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <>
      <Navbar />
      <div className={styles['container']}>
        <AboutComponent />
      </div>
      <Footer />
    </>
  );
}

export default Main;
