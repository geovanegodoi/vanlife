import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LoadDeferredDataProps {
  resolve: Promise<any>;
  children: (data: any) => JSX.Element | JSX.Element;
}

export function LoadDeferredData({ resolve, children }: LoadDeferredDataProps) {
  /* eslint-disable-next-line */
  /* @ts-ignore */
  //const { dataPromise } = useLoaderData();
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Await resolve={resolve}>
        {(dataResolved) => children(dataResolved)}
      </Await>
    </Suspense>
  );
}

export default LoadDeferredData;
