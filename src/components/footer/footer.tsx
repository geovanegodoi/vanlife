import styles from './footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <h1 className={styles['footer-title']}>Ⓒ 2022 #VANLIFE</h1>
    </div>
  );
}

export default Footer;
