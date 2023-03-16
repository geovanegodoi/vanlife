import styles from './about.module.css';
import { Content, Hero } from '../../components';
import TopImage from '../../assets/about.svg';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
  return (
    <div className={styles['container']}>
      <img src={TopImage} alt="About" />
      <div className={styles['about-content']}>
        <Content />
        <Hero />
      </div>
    </div>
  );
}

export default AboutPage;
