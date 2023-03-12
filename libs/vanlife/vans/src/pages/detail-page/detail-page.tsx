import { Loading, useVanData } from '@vanlife/vanlife/shared';
import { useParams } from 'react-router-dom';
import { VanDetail, VanDetailProps } from '../../components';

/* eslint-disable-next-line */
export interface DetailPageProps {}

export async function loaderDetailPage() {
  const res = await fetch('/api/vans');
  const json = await res.json();
  const result = json.vans;
  return result;
}

export function DetailPage(props: DetailPageProps) {
  const { id } = useParams();
  const { loading, data } = useVanData(id);

  return (
    <Loading isLoading={loading}>
      <VanDetail {...(data as VanDetailProps)} />
    </Loading>
  );
}

export default DetailPage;
