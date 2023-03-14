import { getHostVans, LoadDeferredData } from '@vanlife/vanlife/shared';
import { defer, useLoaderData } from 'react-router-dom';
import HostListVanCard, {
  HostListVanCardProps,
} from '../host-list-van-card/host-list-van-card';
import styles from './host-list-vans.module.css';

/* eslint-disable-next-line */
export interface HostListVansProps {}

export async function loaderVansList() {
  const dataPromise = getHostVans();
  return defer({ dataPromise });
}

export function HostListVans(props: HostListVansProps) {
  /* eslint-disable-next-line */
  /* @ts-ignore */
  const { dataPromise } = useLoaderData();

  return (
    <div className={styles['container']}>
      <LoadDeferredData resolve={dataPromise}>
        {(vansData) => {
          return (
            <div>
              {vansData.map((item: HostListVanCardProps, index: number) => (
                <HostListVanCard key={index} {...item} />
              ))}
            </div>
          );
        }}
      </LoadDeferredData>
    </div>
  );
}

export default HostListVans;
