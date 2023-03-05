import { Footer, Navbar, ShellPage } from '@vanlife/vanlife/shared';
import { HomeComponent } from '../../ui/main';
import styles from './main.module.css';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <ShellPage>
      <HomeComponent />
    </ShellPage>
  );
}

export default Main;
