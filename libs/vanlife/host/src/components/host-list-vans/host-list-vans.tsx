import { getHostVans, LoadDeferredData, VanModels } from '@vanlife/shared';
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
        {(dataResolved) => {
          const vansData = dataResolved as VanModels;
          return (
            <>
              {vansData.map((item: HostListVanCardProps, index: number) => (
                <HostListVanCard key={index} {...item} />
              ))}
            </>
          );
        }}
      </LoadDeferredData>
    </div>
  );
}

export default HostListVans;
