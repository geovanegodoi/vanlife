import styles from './host-list-van-card.module.css';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HostListVanCardProps {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

export function HostListVanCard({
  id,
  imageUrl,
  name,
  price,
}: HostListVanCardProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['listed-card']}>
        <img
          className={styles['listed-card-image']}
          src={imageUrl}
          alt={name}
        />
        <div>
          <p className={styles['listed-card-name']}>{name}</p>
          <p className={styles['listed-card-price']}>${price}/day</p>
        </div>
      </div>
      <Link to={`/host/vans/${id}`}>Details</Link>
    </div>
  );
}

export default HostListVanCard;
