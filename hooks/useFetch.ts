import { useState, useEffect } from 'react';
import { fetchData } from '../common/api-service';

const useFetch = (endpoint: string, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = await fetchData(endpoint, options);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
