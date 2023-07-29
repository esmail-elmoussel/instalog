import { Event } from "@/app/types/event.types";
import { useState } from "react";

const columns = [
  {
    accessor: "user.email",
    active: {
      title: "Actor",
      rows: [
        {
          key: "Name",
          accessor: "user.name",
        },
        {
          key: "Email",
          accessor: "user.email",
        },
        {
          key: "ID",
          accessor: "user.id",
        },
      ],
    },
  },
  {
    accessor: "name",
    active: {
      title: "Action",
      rows: [
        {
          key: "Name",
          accessor: "name",
        },
        {
          key: "Object",
          accessor: "event_action",
        },
        {
          key: "ID",
          accessor: "id",
        },
      ],
    },
  },
  {
    accessor: "createdAt",
    active: {
      title: "Date",
      rows: [
        {
          key: "Readable",
          accessor: "createdAt",
        },
      ],
    },
  },
];

export function Row({ event }: { event: Event }) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <tr onClick={() => setActive((prevState) => !prevState)}>
      {columns.map((column) => (
        <td
          key={column.active.title}
          className="py-4 px-4 text-slate-500 w-1/3"
        >
          {active ? (
            <>
              <span className="text-instalog-placeholder text-sm uppercase my-4">
                {column.active.title}
              </span>

              {column.active.rows.map((row) => (
                <div key={row.key} className="flex my-3">
                  <span className="w-1/5 text-instalog-placeholder text-sm">
                    {row.key}
                  </span>
                  <span className="w-4/5 text-black text-sm">
                    {getValueByAccessor(event, row.accessor)}
                  </span>
                </div>
              ))}
            </>
          ) : (
            <>{getValueByAccessor(event, column.accessor)}</>
          )}
        </td>
      ))}
    </tr>
  );
}

function getValueByAccessor(obj: any, accessor: string): string {
  const properties = accessor.split(".");
  let value = obj;

  for (const prop of properties) {
    value = value[prop];
    if (value === undefined) {
      break;
    }
  }

  return value || accessor;
}
