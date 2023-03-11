import { Loading } from '@vanlife/vanlife/shared';
import HostListVanCard, {
  HostListVanCardProps,
} from '../host-list-van-card/host-list-van-card';
import styles from './host-list-vans.module.css';

/* eslint-disable-next-line */
export interface HostListVansProps {
  items: HostListVanCardProps[];
  isLoading: boolean;
}

export function HostListVans({ items, isLoading }: HostListVansProps) {
  return (
    <Loading isLoading={isLoading}>
      <div className={styles['container']}>
        <div>
          {items.map((item, index) => (
            <HostListVanCard key={index} {...item} />
          ))}
        </div>
      </div>
    </Loading>
  );
}

export default HostListVans;
