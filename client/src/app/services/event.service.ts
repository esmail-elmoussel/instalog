import { Event } from "../types/event.types";
import { PaginationResult } from "../types/pagination.types";
import useSWRInfinite from "swr/infinite";

const fetcher = async (args: RequestInfo | URL): Promise<any> => {
  const response = await fetch(args);
  return response.json();
};

export const useGetEvents = () => {
  const swrResponse = useSWRInfinite<PaginationResult<Event[]>>(
    (_, previousPageData: PaginationResult<Event[]> | null) => {
      if (
        previousPageData &&
        previousPageData?.currentPage >= previousPageData?.totalPages
      ) {
        return null;
      }

      return `http://localhost:9000/api/v1/events?pageNumber=${
        (previousPageData?.currentPage || 0) + 1
      }&pageSize=10`;
    },
    fetcher,
    { initialSize: 1 }
  );

  return {
    ...swrResponse,
    loadMore: () => {
      swrResponse.setSize(swrResponse.size + 1);
    },
  };
};
