import styles from './van-layout-page.module.css';
import ReturnImg from '../../assets/goback.svg';
import {
  defer,
  Link,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
} from 'react-router-dom';
import { LoadDeferredData, getVan, Navbar, VanModel } from '@vanlife/shared';
import { VanDetailHeader } from '../../components';
import { hostOptions } from './van-layout-page.helper';

/* eslint-disable-next-line */
export interface VanLayoutPageProps {}

export function loaderVanLayoutPage({ params }: LoaderFunctionArgs) {
  const dataPromise = getVan(params.id);
  return defer({ dataPromise });
}

export function VanLayoutPage(props: VanLayoutPageProps) {
  /* eslint-disable-next-line */
  /* @ts-ignore */
  const { dataPromise } = useLoaderData();

  return (
    <div className={styles['container']}>
      <ReturnLink />
      <LoadDeferredData resolve={dataPromise}>
        {(dataResolved) => {
          const vanData = dataResolved as VanModel;
          return (
            <div className={styles['van-detail-container']}>
              <VanDetailHeader {...vanData} />
              <Navbar options={hostOptions} />
              <Outlet context={vanData} />
            </div>
          );
        }}
      </LoadDeferredData>
    </div>
  );
}

function ReturnLink() {
  return (
    <Link to="../vans">
      <img src={ReturnImg} alt="Go back" style={{ marginRight: '0.5em' }} />{' '}
      Back to all vans
    </Link>
  );
}

export default VanLayoutPage;
