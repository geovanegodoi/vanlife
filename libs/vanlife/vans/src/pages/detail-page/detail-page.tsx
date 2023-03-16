import styles from './detail-page.module.css';
import { getVan, LoadDeferredData, VanModel } from '@vanlife/shared';
import { defer, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { VanDetail } from '../../components';

/* eslint-disable-next-line */
export interface DetailPageProps {}

export async function loaderDetailPage({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error('Invalid van ID');
  }
  const dataPromise = getVan(params.id);
  return defer({ dataPromise });
}

export function DetailPage(props: DetailPageProps) {
  /* eslint-disable-next-line */
  /* @ts-ignore */
  const { dataPromise } = useLoaderData();

  return (
    <div className={styles['container']}>
      <LoadDeferredData resolve={dataPromise}>
        {(dataResolved) => {
          const vanData = dataResolved as VanModel;
          return <VanDetail {...vanData} />;
        }}
      </LoadDeferredData>
    </div>
  );
}

export default DetailPage;
