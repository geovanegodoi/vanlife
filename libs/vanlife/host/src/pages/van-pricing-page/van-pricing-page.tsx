import { VansData } from '@vanlife/vanlife/shared';
import { useParams } from 'react-router-dom';
import styles from './van-pricing-page.module.css';

/* eslint-disable-next-line */
export interface VanPricingPageProps {}

export function VanPricingPage(props: VanPricingPageProps) {
  const { id } = useParams();
  const { price } = VansData.find((item) => item.id === id);
  return (
    <p className={styles['van-pricing-label']}>
      <span>${price}</span>/day
    </p>
  );
}

export default VanPricingPage;
