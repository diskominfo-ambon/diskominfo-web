import axios from 'axios';
import { useEffect, useState } from 'react';

const HTTP_OK = 200;
export default function useFetch({ path }) {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    get(path);
  }, []);

  const get = path => {
    setLoading(true);

    axios.get(path)
    .then(res => {
      setData(res.data);

    })
    .catch(() => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return [
    loading,
    data,
    isError,
  ]
}