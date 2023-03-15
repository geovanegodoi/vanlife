import { useRouteError } from 'react-router-dom';
import styles from './error.module.css';

/* eslint-disable-next-line */
export interface ErrorProps {}

export function Error(props: ErrorProps) {
  const error = useRouteError();
  return (
    <div className={styles['container']}>
      <h1>{error.message}</h1>
      <br />
      <pre>
        <b>Type ...:</b> {error.name}
      </pre>
      <pre>
        <b>Line ...:</b> {error.code}
      </pre>
      <pre>
        <b>Source .:</b> {error.sourceURL}
      </pre>
    </div>
  );
}

export default Error;
