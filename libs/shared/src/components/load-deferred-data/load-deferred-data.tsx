import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import { OneOrMany } from '../../types';

/* eslint-disable-next-line */
export interface LoadDeferredDataProps {
  resolve: Promise<unknown>;
  children: (data: unknown) => OneOrMany<JSX.Element>;
}

export function LoadDeferredData({ resolve, children }: LoadDeferredDataProps) {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Await resolve={resolve}>
        {(dataResolved) => children(dataResolved)}
      </Await>
    </Suspense>
  );
}

export default LoadDeferredData;
