import { useParams } from 'react-router-dom';
import { VanDetail, VanDetailProps } from '../../components';
import { VansData } from '@vanlife/vanlife/shared';

/* eslint-disable-next-line */
export interface DetailPageProps {}

export function DetailPage(props: DetailPageProps) {
  const { id } = useParams();
  const detailData =
    VansData.find((item) => item.id === id) || ({} as VanDetailProps);

  return <VanDetail {...detailData} />;
}

export default DetailPage;
