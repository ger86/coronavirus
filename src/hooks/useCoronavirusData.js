import slugify from 'slugify';
import useFetch from 'hooks/useFetch';

const useCoronavirusData = zone => {
  const key = slugify(zone);
  const fromLocalStorage = window.localStorage.getItem(key);
  const dataFromLocalStorage = fromLocalStorage ? JSON.parse(fromLocalStorage) : null;
  const {data, loading} = useFetch(`https://enrichman.github.io/covid19/world${zone}`);

  if (data) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  return {
    data: data || dataFromLocalStorage,
    loading: loading && !dataFromLocalStorage
  };
}

export default useCoronavirusData;