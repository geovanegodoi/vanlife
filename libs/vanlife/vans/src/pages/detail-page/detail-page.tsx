import { useParams } from 'react-router-dom';
import { VanDetail, VanDetailProps } from '../../components';
import { VansData } from '@vanlife/vanlife/shared';

/* eslint-disable-next-line */
export interface DetailPageProps {}

export function DetailPage(props: DetailPageProps) {
  const { id } = useParams();
  const data = VansData.find((item) => item.id === id);

  return <VanDetail {...(data || ({} as VanDetailProps))} />;
}

export default DetailPage;
