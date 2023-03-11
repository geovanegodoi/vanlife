import styles from './van-layout-page.module.css';
import ReturnImg from '../../assets/goback.svg';
import { Link, Outlet, useParams } from 'react-router-dom';
import {
  Loading,
  Navbar,
  NavbarOptions,
  useVanData,
} from '@vanlife/vanlife/shared';
import { VanDetailHeader, VanDetailHeaderProps } from '../../components';

/* eslint-disable-next-line */
export interface VanLayoutPageProps {}

const options = [
  {
    text: 'Details',
    target: '',
    end: true,
  },
  {
    text: 'Pricing',
    target: 'pricing',
  },
  {
    text: 'Photos',
    target: 'photos',
  },
] as NavbarOptions;

export function VanLayoutPage(props: VanLayoutPageProps) {
  const { id } = useParams();
  const { loading, data } = useVanData(id);

  return (
    <div className={styles['container']}>
      <ReturnLink />
      <div className={styles['van-detail-container']}>
        <Loading isLoading={loading}>
          <VanDetailHeader {...(data as VanDetailHeaderProps)} />
          <Navbar options={options} />
          <Outlet context={data} />
        </Loading>
      </div>
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
