import styles from './income-page.module.css';

/* eslint-disable-next-line */
export interface IncomePageProps {}

export function IncomePage(props: IncomePageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IncomePage!</h1>
    </div>
  );
}

export default IncomePage;
