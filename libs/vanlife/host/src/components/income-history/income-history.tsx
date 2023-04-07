import styles from './income-history.module.css';

/* eslint-disable-next-line */
export interface IncomeHistoryProps {}

export function IncomeHistory(props: IncomeHistoryProps) {
  return (
    <div className={styles['income-history']}>
      <div className={styles['title']}>
        <h1>Your transactions (3)</h1>
        <p className={styles['last-days']}>
          Income last <span>30 days</span>
        </p>
      </div>
      <div className={styles['transaction-list']}>
        {transactions.map((transaction, index) => (
          <TransactionCard key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
}

/* eslint-disable-next-line */
interface TransactionCardProps {
  value: number;
  date: string;
}

function TransactionCard({ value, date }: TransactionCardProps) {
  return (
    <div className={styles['transaction-card']}>
      <p>${value}</p>
      <p>{date}</p>
    </div>
  );
}

const transactions: TransactionCardProps[] = [
  { value: 720, date: '01/12/22' },
  { value: 560, date: '10/11/22' },
  { value: 980, date: '23/11/22' },
];

export default IncomeHistory;
