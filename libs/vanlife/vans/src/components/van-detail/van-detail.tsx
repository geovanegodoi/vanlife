import styles from './van-detail.module.css';
import GoBackImg from '../../assets/goback.svg';
import { Link, useLocation } from 'react-router-dom';
import { VanType, VanTypeBadge } from '@vanlife/vanlife/shared';
import useVansFilter from '../../hooks/useVansFilter';

/* eslint-disable-next-line */
export interface VanDetailProps {
  imageUrl: string;
  type: VanType;
  name: string;
  price: number;
  description: string;
}

export function VanDetail({
  imageUrl,
  type,
  name,
  price,
  description,
}: VanDetailProps) {
  const location = useLocation();
  const searchParams = location.state?.search || '';
  const filterType = location.state?.filterType || 'all';

  return (
    <div className={styles['container']}>
      <Link to={`../vans${searchParams}`}>
        <img src={GoBackImg} alt="Goback" style={{ marginRight: '0.5em' }} />{' '}
        {`Back to ${filterType} vans`}
      </Link>
      <img src={imageUrl} alt={name} />
      <VanTypeBadge type={type} />
      <h1>{name}</h1>
      <label>
        ${price}
        <span>/day</span>
      </label>
      <p>{description}</p>
      <button>Rent this van</button>
    </div>
  );
}

export default VanDetail;
