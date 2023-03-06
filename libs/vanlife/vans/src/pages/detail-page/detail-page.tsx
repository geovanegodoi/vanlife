import { useParams } from 'react-router-dom';
import { MockData } from '../../mocks/MockData';
import { VanDetail, VanDetailProps } from '../../components';

/* eslint-disable-next-line */
export interface DetailPageProps {}

export function DetailPage(props: DetailPageProps) {
  const { id } = useParams();
  const detailData =
    MockData.find((item) => item.id === id) || ({} as VanDetailProps);

  return <VanDetail {...detailData} />;
}

export default DetailPage;
