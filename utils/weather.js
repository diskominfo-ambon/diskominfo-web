import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useWeather(city = 'Ambon') {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const KEY = process.env.NEXT_PUBLIC_WEATHERAPI_KEY;
  const URL = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(URL);

        setState(data);
        setLoading(false);
      } catch (err) {
        console.log('weatherapi: ' + err);
      }
    })();

  }, []);


  return [
    state,
    loading
  ];
}