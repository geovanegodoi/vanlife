import { VanModel } from '@vanlife/vanlife/shared';
import { useEffect, useState } from 'react';

export function useVansData(filter?: string) {
  const [data, setData] = useState<VanModel[]>();

  function filterData(data: VanModel[]): VanModel[] {
    return filter ? data?.filter((item) => item.type === filter) : data;
  }

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((json) => setData(filterData(json.vans)));
  }, []);

  return [data];
}

export default useVansData;
