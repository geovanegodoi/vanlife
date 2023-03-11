import styles from './loading.module.css';

/* eslint-disable-next-line */
export interface LoadingProps {
  isLoading: boolean;
  children: JSX.Element | JSX.Element[];
}

export function Loading({ isLoading, children }: LoadingProps) {
  return isLoading ? (
    <div className={styles['container']}>
      <h1>Loading...</h1>
    </div>
  ) : (
    <>{children}</>
  );
}
export default Loading;
