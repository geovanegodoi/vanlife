import styles from './detail-label.module.css';

/* eslint-disable-next-line */
export interface DetailLabelProps {
  label: string;
  value: string;
}

export function DetailLabel({ label, value }: DetailLabelProps) {
  return (
    <div className={styles['container']}>
      <p className={styles['detail-label']}>
        <span>{label}:</span> {value}
      </p>
    </div>
  );
}

export default DetailLabel;
