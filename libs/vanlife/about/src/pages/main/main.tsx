import { ShellPage } from '@vanlife/vanlife/shared';
import { AboutComponent } from '../../ui/main';
import styles from './main.module.css';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <ShellPage>
      <AboutComponent />
    </ShellPage>
  );
}

export default Main;
