import { siteData } from "../data/content";

export function Footer() {
  const { footer, business } = siteData;

  return (
    <footer className="relative mt-16 border-t border-white/10 bg-white/[0.03] py-12 text-xs text-slate-400 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-semibold text-white">{business.name}</div>
          <div className="mt-2 leading-relaxed text-slate-400/80">
            {footer.description}
          </div>
        </div>
        <div className="space-y-1 leading-relaxed">
          {footer.schedule.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
          <div>© {business.currentYear} {business.name}</div>
        </div>
      </div>
    </footer>
  );
}