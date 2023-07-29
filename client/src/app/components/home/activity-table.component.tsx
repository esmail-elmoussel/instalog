export function ActivityTable() {
  return (
    <div className="not-prose relative rounded-xl bg-primary">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-secondary text-left uppercase">
              Actor
            </th>
            <th className="border-b font-medium p-4 pt-0 pb-3 text-secondary text-left uppercase">
              Action
            </th>
            <th className="border-b font-medium p-4 pr-8 pt-0 pb-3 text-secondary text-left uppercase">
              Date
            </th>
          </tr>
        </thead>
      </table>

      <button className="flex justify-center rounded-b-xl w-full py-4 uppercase font-medium text-sm text-secondary">
        Load more
      </button>

      <div className="absolute inset-0 pointer-events-none border border-primary rounded-xl"></div>
    </div>
  );
}
