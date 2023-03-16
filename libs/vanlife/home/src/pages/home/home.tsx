import styles from './home.module.css';
import { Content, Button } from '../../components';
import backgroundImage from '../../assets/home.svg';

/* eslint-disable-next-line */
export interface MainProps {}

export function HomePage(props: MainProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <Content />
        <Button />
      </div>
      <img src={backgroundImage} alt="home page" />
    </div>
  );
}

export default HomePage;
