import { useEffect, useRef, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const firstRender = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      if (!firstRender.current) {
        try {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      }
      firstRender.current = false;
    };
    fetchData();
  }, [url]);

  return { data, loading };
}
