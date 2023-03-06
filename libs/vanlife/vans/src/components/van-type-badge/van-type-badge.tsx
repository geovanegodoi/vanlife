import { VanType } from '@vanlife/vanlife/shared';
import styles from './van-type-badge.module.css';

/* eslint-disable-next-line */
export interface VanTypeBadgeProps {
  type: VanType;
}

export function VanTypeBadge({ type }: VanTypeBadgeProps) {
  return (
    <span className={styles[`van-type-badge-${type.toLowerCase()}`]}>
      {type}
    </span>
  );
}

export default VanTypeBadge;
