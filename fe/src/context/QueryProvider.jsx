import { createContext, useContext, useEffect, useState } from "react";

const QueryContext = createContext();

const QueryProvider = ({ children }) => {
  const [queries, setQueries] = useState({});

  return (
    <QueryContext.Provider
      value={{
        queries,
        setQueries,
      }}
    >
      {children}
    </QueryContext.Provider>
  )
}

export default QueryProvider;

export const useQuery = ({
  queryKey,
  queryFn,
  onError,
}) => {
  const { queries, setQueries } = useContext(QueryContext);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (queries[queryKey]) {
      setData(queries[queryKey].data);
      setIsLoading(queries[queryKey].isLoading);
    }
  }, [queryKey, queries]);

  const loadData = async () => {
    let data = undefined;
    setQueries((prev) => {
      const queries = { ...prev };
      queries[queryKey] = {
        data,
        isLoading: true,
      }
      return queries;
    });
    try {
      const result = await queryFn?.();
      data = result.data;
    } catch (err) {
      onError?.(err);
    } finally {
      setQueries((prev) => {
        const queries = { ...prev };
        queries[queryKey] = {
          data,
          isLoading: false,
        }
        return queries;
      });
    }
  }

  useEffect(() => {
    if (!queries[queryKey]) {
      loadData();
    }
  }, [queries, queryKey, queryFn]);

  return { data, isLoading };
}
