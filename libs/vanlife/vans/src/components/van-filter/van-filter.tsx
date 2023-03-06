import styles from './van-filter.module.css';

/* eslint-disable-next-line */
export interface VanFilterProps {}

export function VanFilter(props: VanFilterProps) {
  const types = ['Simple', 'Luxury', 'Rugged'];

  return (
    <div className={styles['container']}>
      {types.map((item) => (
        <button key={item} className={styles['van-filter-button']}>
          {item}
        </button>
      ))}
      <a className={styles['van-filter-clear']}>Clear filter</a>
    </div>
  );
}

export default VanFilter;
