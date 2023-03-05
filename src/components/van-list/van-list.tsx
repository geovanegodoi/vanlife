import styles from './van-list.module.css';
import { VanCard } from '../van-card';
import { VanCardProps } from '../van-card/van-card';

/* eslint-disable-next-line */
export interface VanListProps {
  items: VanCardProps[];
}

export function VanList({ items }: VanListProps) {
  return (
    <div className={styles['container']}>
      {items.map((item) => (
        <VanCard key={item.name} {...item} />
      ))}
    </div>
  );
}

export default VanList;
