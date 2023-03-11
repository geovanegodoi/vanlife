import { useSearchParams } from 'react-router-dom';

export function useVansFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get('type');
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

  return { filterType, queryString, setFilterParams };
}

export default useVansFilter;
