"use client";

import { useState } from "react";
import { formatDate } from "@/lib/utils";

type Row = Record<string, unknown> & { id: number; status: string; created_at: string };

const STATUS_OPTIONS: Record<string, string[]> = {
  bookings: ["new", "contacted", "confirmed", "declined"],
  members: ["pending", "reviewing", "invited", "declined"],
  "venue-hire": ["new", "contacted", "confirmed", "declined"],
  promoters: ["new", "reviewing", "accepted", "declined"],
};

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    new: "border-champagne/40 text-champagne bg-champagne/5",
    pending: "border-champagne/40 text-champagne bg-champagne/5",
    contacted: "border-blue-400/30 text-blue-300 bg-blue-400/5",
    reviewing: "border-blue-400/30 text-blue-300 bg-blue-400/5",
    confirmed: "border-green-400/30 text-green-300 bg-green-400/5",
    invited: "border-green-400/30 text-green-300 bg-green-400/5",
    accepted: "border-green-400/30 text-green-300 bg-green-400/5",
    declined: "border-cherry-2/50 text-[#e8a2b0] bg-cherry/10",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono-label text-[0.6rem] uppercase ${
        colors[status] || "border-hairline text-ivory-dim"
      }`}
    >
      {status}
    </span>
  );
}

export function DataTable({
  table,
  columns,
  rows,
}: {
  table: string;
  columns: { key: string; label: string }[];
  rows: Row[];
}) {
  const [data, setData] = useState(rows);

  function updateStatus(id: number, status: string) {
    setData((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    // Demo mode: status changes are local-only and reset on refresh.
    // When the backend exists, call your update endpoint here, e.g.
    // await fetch(`${API_BASE_URL}/api/admin/${table}/${id}`, { method: "PATCH", ... })
  }

  if (data.length === 0) {
    return (
      <div className="rounded-xl border border-hairline bg-surface/30 p-12 text-center text-ivory-dim text-sm">
        No entries yet. Submissions from the website will appear here.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-hairline bg-surface/30 overflow-x-auto scrollbar-none">
      <table className="w-full text-sm min-w-[900px]">
        <thead>
          <tr className="border-b border-hairline">
            <th className="text-left py-3 px-4 font-mono-label text-[0.6rem] text-ivory-dim uppercase">
              Date
            </th>
            {columns.map((c) => (
              <th
                key={c.key}
                className="text-left py-3 px-4 font-mono-label text-[0.6rem] text-ivory-dim uppercase"
              >
                {c.label}
              </th>
            ))}
            <th className="text-left py-3 px-4 font-mono-label text-[0.6rem] text-ivory-dim uppercase">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-hairline/60 hover:bg-surface-2/40">
              <td className="py-3 px-4 whitespace-nowrap text-ivory-dim text-xs">
                {formatDate(row.created_at)}
              </td>
              {columns.map((c) => (
                <td key={c.key} className="py-3 px-4 max-w-[220px] truncate">
                  {(row[c.key] as string) || (
                    <span className="text-ivory-dim/40">—</span>
                  )}
                </td>
              ))}
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <StatusBadge status={row.status} />
                  <select
                    className="bg-transparent border border-hairline rounded-md text-[0.65rem] px-2 py-1 font-mono-label uppercase text-ivory-dim outline-none focus-visible:border-champagne"
                    value={row.status}
                    onChange={(e) => updateStatus(row.id, e.target.value)}
                  >
                    {STATUS_OPTIONS[table].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
