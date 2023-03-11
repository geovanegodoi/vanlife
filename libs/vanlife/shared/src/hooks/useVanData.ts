import { VanModel } from '@vanlife/vanlife/shared';
import { useEffect, useState } from 'react';

export function useVanData(id: string | undefined) {
  const [data, setData] = useState<VanModel>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/vans/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setLoading(false);
          setData(json.van);
        });
    }
  }, [id]);

  return { loading, data };
}

export default useVanData;
