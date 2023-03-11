import { VanModel } from '@vanlife/vanlife/shared';
import { useEffect, useState } from 'react';

export function useVanData(id: string | undefined) {
  const [data, setData] = useState<VanModel>();

  useEffect(() => {
    if (id) {
      fetch(`/api/vans/${id}`)
        .then((res) => res.json())
        .then((json) => setData(json.van));
    }
  }, [id]);

  return [data];
}

export default useVanData;
