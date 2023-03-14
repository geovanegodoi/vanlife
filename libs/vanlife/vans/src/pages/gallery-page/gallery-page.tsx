import styles from './gallery-page.module.css';
import { VanFilter, VanList } from '../../components';
import {
  getAllVans,
  LoadDeferredData,
  VanModel,
} from '@vanlife/vanlife/shared';
import { useVansFilter } from '../../hooks';
import { defer, useLoaderData } from 'react-router-dom';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export async function loaderGalleryPage() {
  const dataPromise = getAllVans();
  return defer({ dataPromise });
}

export function GalleryPage(props: GalleryPageProps) {
  /* eslint-disable-next-line */
  /* @ts-ignore */
  const { dataPromise } = useLoaderData();
  const { filterType } = useVansFilter();

  return (
    <div style={{ padding: '2em' }}>
      <h1 className={styles['vans-page-title']}>Explore our van options</h1>
      <VanFilter />
      <LoadDeferredData resolve={dataPromise}>
        {(vansData) => {
          const filteredVans = filterVans(filterType, vansData);
          return <VanList items={filteredVans} />;
        }}
      </LoadDeferredData>
    </div>
  );
}

function filterVans(filterType: string | null, vans: VanModel[]): VanModel[] {
  return filterType
    ? vans.filter((van) => van.type === filterType.toLowerCase())
    : vans;
}
