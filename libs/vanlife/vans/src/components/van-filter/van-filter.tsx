import { VanType } from '@vanlife/shared';
import { Link } from 'react-router-dom';
import { useVansFilter } from '../../hooks';
import styles from './van-filter.module.css';

/* eslint-disable-next-line */
export interface VanFilterProps {}

export function VanFilter(props: VanFilterProps) {
  const types = ['Simple', 'Luxury', 'Rugged'] as VanType[];
  const { filterType } = useVansFilter();

  return (
    <div className={styles['container']}>
      {types.map((item) => (
        <Link
          key={item}
          className={`${styles['van-filter-button']} 
                      ${styles[item.toLowerCase()]}
                      ${filterType === item ? styles['selected'] : ''}
                      `}
          to={`?type=${item}`}
        >
          {item}
        </Link>
      ))}
      {filterType && <CleanFilterLink />}
    </div>
  );
}

function CleanFilterLink() {
  return (
    <Link className={styles['van-filter-clear']} to=".">
      Clear filter
    </Link>
  );
}

export default VanFilter;
