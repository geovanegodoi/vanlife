import { About, Footer, Navbar } from 'src/components';
import styles from './about-page.module.css';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}

export default AboutPage;
