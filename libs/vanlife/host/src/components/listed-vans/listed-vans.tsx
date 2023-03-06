import { Link } from 'react-router-dom';
import ListedVanCard from '../listed-van-card/listed-van-card';
import styles from './listed-vans.module.css';
import { MockData } from '../../../../vans/src/mocks/MockData';

/* eslint-disable-next-line */
export interface ListedVansProps {}

export function ListedVans(props: ListedVansProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['list-title-container']}>
        <p className={styles['list-title']}>Your listed vans</p>
        <Link className={styles['link-view-all']} to="">
          View all
        </Link>
      </div>
      <div>
        {MockData.slice(0, 3).map((item) => (
          <ListedVanCard {...item} />
        ))}
      </div>
    </div>
  );
}

export default ListedVans;
