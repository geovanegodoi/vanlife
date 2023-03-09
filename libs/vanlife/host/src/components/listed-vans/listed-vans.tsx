import { Link } from 'react-router-dom';
import ListedVanCard, {
  ListedVanCardProps,
} from '../listed-van-card/listed-van-card';
import styles from './listed-vans.module.css';

/* eslint-disable-next-line */
export interface ListedVansProps {
  items: ListedVanCardProps[];
}

export function ListedVans({ items }: ListedVansProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['list-title-container']}>
        <p className={styles['list-title']}>Your listed vans</p>
        <Link className={styles['link-view-all']} to="">
          View all
        </Link>
      </div>
      <div>
        {items.slice(0, 3).map((item, index) => (
          <ListedVanCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ListedVans;
