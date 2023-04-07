import styles from './income-page.module.css';
import graph from '../../assets/income-graph.png';
import { IncomeHead, IncomeHistory } from '../../components';

/* eslint-disable-next-line */
export interface IncomePageProps {}

export function IncomePage(props: IncomePageProps) {
  return (
    <div className={styles['income-page']}>
      <IncomeHead />
      <img className={styles['income-graph']} src={graph} alt={graph} />
      <IncomeHistory />
    </div>
  );
}

export default IncomePage;
