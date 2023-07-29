export function ActivityTable() {
  return (
    <div className="flex flex-col not-prose relative rounded-xl bg-instalog-primary">
      <input
        type="search"
        className="m-4 p-4 text-sm border rounded-lg bg-instalog-primary focus:bg-white placeholder-kaka-baba"
        placeholder="Search name, email or action..."
      />

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
      </table>

      <button className="flex justify-center rounded-b-xl w-full py-4 uppercase font-medium text-sm text-instalog-secondary">
        Load more
      </button>

      <div className="absolute inset-0 pointer-events-none border border-instalog-primary rounded-xl"></div>
    </div>
  );
}
