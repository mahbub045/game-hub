/* eslint-disable react-hooks/exhaustive-deps */
import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps: unknown[] = [] // Use unknown[] to avoid any type warning
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setError(err.message);
          setIsLoading(false); // Update isLoading to false if there's an error
        }
      });

    return () => controller.abort();
  }, deps);

  return { data, error, isLoading };
};

export default useData;
