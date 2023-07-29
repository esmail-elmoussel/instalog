"use client";

import { useGetEvents } from "@/app/services";
import { Row } from "./row.component";
import { useMemo, useState } from "react";
import { Search } from "./search.component";

export function ActivityTable() {
  const [search, setSearch] = useState<string>();

  const { data: pages, loadMore } = useGetEvents(search);

  const showLoadMore: boolean = useMemo(() => {
    if (!pages) {
      return true;
    }

    return pages[pages.length - 1].currentPage < pages[0].totalPages;
  }, [pages]);

  return (
    <div className="flex flex-col not-prose relative rounded-xl bg-instalog-primary">
      <Search onChange={setSearch} />

      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-instalog-secondary text-left uppercase">
              Actor
            </th>
            <th className="border-b font-medium p-4 pt-0 pb-3 text-instalog-secondary text-left uppercase">
              Action
            </th>
            <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-instalog-secondary text-left uppercase">
              Date
            </th>
          </tr>
        </thead>

        <tbody className="bg-white ">
          {pages?.map((page) =>
            page.items.map((event) => <Row key={event.id} event={event} />)
          )}
        </tbody>
      </table>

      {showLoadMore && (
        <button
          onClick={loadMore}
          className="flex justify-center rounded-b-xl w-full py-4 uppercase font-medium text-sm text-instalog-secondary"
        >
          Load more
        </button>
      )}

      <div className="absolute inset-0 pointer-events-none border border-instalog-primary rounded-xl"></div>
    </div>
  );
}
