import styles from './gallery-page.module.css';
import { VanFilter, VanList } from '../../components';
import { VanModel } from '@vanlife/vanlife/shared';
import { useVansFilter } from '../../hooks';
import {
  Await,
  defer,
  LoaderFunctionArgs,
  useLoaderData,
} from 'react-router-dom';
import { Suspense } from 'react';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export async function loaderGalleryPage({
  request,
  params,
}: LoaderFunctionArgs) {
  const vansPromise = getVansData();
  return defer({ vansPromise });
}

async function getVansData(): Promise<VanModel[]> {
  const res = await fetch('/api/vans');
  const json = await res.json();
  return json.vans;
}

export function GalleryPage(props: GalleryPageProps) {
  const { filterType } = useVansFilter();
  /* eslint-disable-next-line */
  /* @ts-ignore */
  const { vansPromise } = useLoaderData();
  return (
    <div style={{ padding: '2em' }}>
      <h1 className={styles['vans-page-title']}>Explore our van options</h1>
      <VanFilter />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={vansPromise}>
          {(vans) => {
            const filteredVans = filterVans(filterType, vans);
            return <VanList items={filteredVans} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}

function filterVans(filterType: string | null, vans: VanModel[]): VanModel[] {
  return filterType ? vans.filter((van) => van.type === filterType) : vans;
}
