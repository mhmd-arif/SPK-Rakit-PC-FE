import { useEffect, useState } from "react";
import { createFetcher } from "./fetcher";

export const useFetch = (endpoint, refreshSignal) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async function () {
      try {
        const fetcher = createFetcher();
        const response = await fetcher.get(endpoint);
        if (!response.data.success) setError(response.data.error);
          setData(response.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, [endpoint, refreshSignal]);

  return {data, error, isLoading: !data && !error};
}