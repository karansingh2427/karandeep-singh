import type { ImpactRow } from "@/content/projects";

export function ImpactTable({ rows }: { rows: ImpactRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line text-xs font-medium tracking-wide text-ink/50 uppercase">
            <th className="py-3 pr-4 font-medium"> </th>
            <th className="py-3 pr-4 font-medium">Before</th>
            <th className="py-3 font-medium">Now</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line">
              <th className="py-3 pr-4 font-medium text-ink">{row.label}</th>
              <td className="py-3 pr-4 text-ink-soft">{row.before}</td>
              <td className="py-3 font-medium text-ink">{row.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
