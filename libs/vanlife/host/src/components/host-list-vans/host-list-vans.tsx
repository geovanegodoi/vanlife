import HostListVanCard, {
  HostListVanCardProps,
} from '../host-list-van-card/host-list-van-card';
import styles from './host-list-vans.module.css';

/* eslint-disable-next-line */
export interface HostListVansProps {
  items: HostListVanCardProps[];
}

export function HostListVans({ items }: HostListVansProps) {
  return (
    <div className={styles['container']}>
      <div>
        {items.map((item, index) => (
          <HostListVanCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default HostListVans;
