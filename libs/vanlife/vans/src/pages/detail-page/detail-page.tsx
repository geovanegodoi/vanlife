import { useVanData } from '@vanlife/vanlife/shared';
import { useParams } from 'react-router-dom';
import { VanDetail, VanDetailProps } from '../../components';

/* eslint-disable-next-line */
export interface DetailPageProps {}

export function DetailPage(props: DetailPageProps) {
  const { id } = useParams();
  const [van] = useVanData(id);

  function dataNotReady() {
    return !van;
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

  return <VanDetail {...(van as VanDetailProps)} />;
}

export default DetailPage;
