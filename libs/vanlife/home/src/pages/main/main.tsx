import { Footer, Navbar } from '@vanlife/vanlife/shared';
import { HomeComponent } from '../../ui/main';
import styles from './main.module.css';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <>
      <Navbar />
      <div className={styles['container']}>
        <HomeComponent />
      </div>
      <Footer />
    </>
  );
}

export default Main;
