import { OrNull, VanModel } from '@vanlife/shared';
import { useEffect, useState } from 'react';

export function useVansData(filter?: OrNull<string>) {
  const [data, setData] = useState<VanModel[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setData(json.vans);
      });
  }, []);

  function filterData(data: VanModel[] = []): VanModel[] {
    return filter ? data?.filter((item) => item.type === filter) : data;
  }

  return { loading, vans: filterData(data) };
}

export default useVansData;
