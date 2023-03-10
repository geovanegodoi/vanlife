import { VansData } from '@vanlife/vanlife/shared';
import { useOutletContext, useParams } from 'react-router-dom';
import styles from './van-pricing-page.module.css';

/* eslint-disable-next-line */
export interface VanPricingPageProps {}

interface VanPricingPageData {
  price: string;
}

export function VanPricingPage(props: VanPricingPageProps) {
  const context = useOutletContext<VanPricingPageData>();
  return (
    <p className={styles['van-pricing-label']}>
      <span>${context.price}</span>/day
    </p>
  );
}

export default VanPricingPage;
