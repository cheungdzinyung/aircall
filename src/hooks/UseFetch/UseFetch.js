import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, refetch) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      if (!refetch) {
        return;
      }
      setIsLoading(true);
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .then(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [url, refetch]);

  return { data, isLoading };
};
