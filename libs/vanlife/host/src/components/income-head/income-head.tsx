import styles from './income-head.module.css';

/* eslint-disable-next-line */
export interface IncomeHeadProps {}

export function IncomeHead(props: IncomeHeadProps) {
  return (
    <div className={styles['income-head']}>
      <p className={styles['title']}>Income</p>
      <p className={styles['last-days']}>
        Income last <span>30 days</span>
      </p>
      <p className={styles['income-value']}>$2,260</p>
    </div>
  );
}

export default IncomeHead;
