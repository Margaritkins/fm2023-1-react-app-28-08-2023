import { useState, useEffect } from 'react';

const useLoaderData = (loadData) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    loadData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      }); // eslint-disable-next-line
  }, []);

  return { data, error, isFetching };
};

export default useLoaderData;
