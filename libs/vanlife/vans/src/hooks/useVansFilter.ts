import { VansData } from '@vanlife/vanlife/shared';
import { useSearchParams } from 'react-router-dom';

export default function useVansFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get('type');
  const filteredItems = filterType
    ? VansData.filter((item) => item.type === filterType)
    : VansData;
  const queryString = searchParams.toString() && `?${searchParams.toString()}`;

  function setFilterParams(value: string) {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete('type');
      } else {
        prev.set('type', value);
      }
      return prev;
    });
  }

  return {
    filterType,
    filteredItems,
    queryString,
    setFilterParams,
  };
}
