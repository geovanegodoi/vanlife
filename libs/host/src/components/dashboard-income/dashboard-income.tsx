import { Link } from 'react-router-dom';
import styles from './dashboard-income.module.css';

/* eslint-disable-next-line */
export interface DashboardIncomeProps {}

export function DashboardIncome(props: DashboardIncomeProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['dashboard-content']}>
        <p className={styles['dashboard-content-welcome']}>Welcome!</p>
        <p className={styles['dashboard-content-income-last']}>
          Income last <span>30 days</span>
        </p>
        <p className={styles['dashboard-content-income']}>$2,260</p>
      </div>
      <Link to="">Details</Link>
    </div>
  );
}

export default DashboardIncome;
