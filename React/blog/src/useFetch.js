import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(res => {
      console.log(res);
      if(!res.ok) {
        throw Error('Unable to fetch data - Nope!')
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setIsLoading(false);
      setError(err.message);
    })
  }, [url]);

  return { data, isLoading, error }
}

export default useFetch;