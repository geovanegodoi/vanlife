import { useRouteError } from 'react-router-dom';
import styles from './error.module.css';

/* eslint-disable-next-line */
export interface ErrorProps {}

export function Error(props: ErrorProps) {
  const error = useRouteError();
  console.log(error);
  return (
    <div className={styles['container']}>
      <h1>{error.message}</h1>
      <br />
      <pre>
        <b>Type ...:</b> {error.name}
      </pre>
      <pre>
        <b>Source .:</b>{' '}
        {error.sourceURL.substring(error.sourceURL.lastIndexOf('/') + 1)}
      </pre>
      <pre>
        <b>Line ...:</b> {error.code}
      </pre>
    </div>
  );
}

export default Error;
