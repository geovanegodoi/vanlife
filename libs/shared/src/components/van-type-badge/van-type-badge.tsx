import styles from './van-type-badge.module.css';
import { VanType } from '../../types';

/* eslint-disable-next-line */
export interface VanTypeBadgeProps {
  type: VanType;
}

export function VanTypeBadge({ type }: VanTypeBadgeProps) {
  return (
    <span className={styles[`van-type-badge-${type && type.toLowerCase()}`]}>
      {type}
    </span>
  );
}

export default VanTypeBadge;
