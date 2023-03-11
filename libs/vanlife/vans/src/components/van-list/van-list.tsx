import styles from './van-list.module.css';
import { VanCard, VanCardProps } from '../../components';
import { Loading } from '@vanlife/vanlife/shared';

/* eslint-disable-next-line */
export interface VanListProps {
  items: VanCardProps[];
  isLoading: boolean;
}

export function VanList({ items, isLoading }: VanListProps) {
  return (
    <Loading isLoading={isLoading}>
      <div className={styles['container']}>
        {items.map((item) => (
          <VanCard key={item.name} {...item} />
        ))}
      </div>
    </Loading>
  );
}

export default VanList;
