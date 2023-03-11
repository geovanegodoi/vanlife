import styles from './gallery-page.module.css';
import { VanFilter, VanList } from '../../components';
import { useVansData } from '@vanlife/vanlife/shared';
import { useVansFilter } from '../../hooks';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export function GalleryPage(props: GalleryPageProps) {
  const { filterType } = useVansFilter();
  const [vans] = useVansData(filterType);

  // const filteredItems = filterType
  //   ? vans?.filter((item) => item.type === filterType)
  //   : vans;

  function dataNotReady() {
    return !vans || vans?.length === 0;
  }

  function Loading() {
    return (
      <div style={{ padding: '2em 3em' }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (dataNotReady()) {
    return <Loading />;
  }

  return (
    <div style={{ padding: '2em' }}>
      <h1 className={styles['vans-page-title']}>Explore our van options</h1>
      <VanFilter />
      <VanList items={vans || []} />
    </div>
  );
}

export default GalleryPage;
