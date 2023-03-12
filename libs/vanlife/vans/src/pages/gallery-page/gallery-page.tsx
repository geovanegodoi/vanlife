import styles from './gallery-page.module.css';
import { VanFilter, VanList } from '../../components';
import { VanModel } from '@vanlife/vanlife/shared';
import { useVansFilter } from '../../hooks';
import { useLoaderData } from 'react-router-dom';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export async function loaderGalleryPage() {
  const res = await fetch('/api/vans');
  const json = await res.json();
  const result = json.vans;
  return result;
}

export function GalleryPage(props: GalleryPageProps) {
  const { filterType } = useVansFilter();
  const vans = useLoaderData() as VanModel[];
  const filteredVans = filterVans(filterType, vans);

  return (
    <div style={{ padding: '2em' }}>
      <h1 className={styles['vans-page-title']}>Explore our van options</h1>
      <VanFilter />
      <VanList items={filteredVans} />
    </div>
  );
}

function filterVans(filterType: string | null, vans: VanModel[]): VanModel[] {
  return filterType ? vans.filter((van) => van.type === filterType) : vans;
}
