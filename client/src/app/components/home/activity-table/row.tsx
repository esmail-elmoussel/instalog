import { Event } from "@/app/types/event.types";

export function Row({ event }: { event: Event }) {
  return (
    <tr>
      <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
        {event.user.email}
      </td>

      <td className="border-b border-slate-100 p-4 text-slate-500">
        {event.name}
      </td>

      <td className="border-b border-slate-100 p-4 pr-8 text-slate-500">
        {event.createdAt.toLocaleString()}
      </td>
    </tr>
  );
}
