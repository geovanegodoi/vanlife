import styles from './van-layout-page.module.css';
import GoBackImg from '../../assets/goback.svg';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Navbar, NavbarOption } from '@vanlife/vanlife/shared';
import { VanDetailHeader, VanDetailHeaderProps } from '../../components';
import { VansData } from '@vanlife/vanlife/shared';

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
] as NavbarOption[];

export function VanLayoutPage(props: VanLayoutPageProps) {
  const { id } = useParams();
  const data = VansData.find((item) => item.id === id);

  return (
    <div className={styles['container']}>
      <GoBackLink />
      <div className={styles['van-detail-container']}>
        <VanDetailHeader {...(data as VanDetailHeaderProps)} />
        <Navbar options={options} />
        <Outlet />
      </div>
    </div>
  );
}

function GoBackLink() {
  return (
    <Link to="/host/vans">
      <img src={GoBackImg} alt="Goback" style={{ marginRight: '0.5em' }} /> Back
      to all vans
    </Link>
  );
}

export default VanLayoutPage;
