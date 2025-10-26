interface StatProps {
  label: string;
  value: string;
}

export function Stat({ label, value }: StatProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">{label}</div>
    </div>
  );
}