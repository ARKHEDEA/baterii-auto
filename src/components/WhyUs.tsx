import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { Stat } from "./Stat";
import { siteData } from "../data/content";

export function WhyUs() {
  const { whyUs } = siteData;

  return (
    <SectionShell
      id="why"
      eyebrow={whyUs.eyebrow}
      title={whyUs.title}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-xl shadow-[0_30px_120px_-10px_rgba(0,0,0,0.9)]"
        >
          <div className="text-lg font-semibold text-white">
            {whyUs.intro.title}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {whyUs.intro.description}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center text-xs">
            {whyUs.stats.map((stat, i) => (
              <Stat key={i} label={stat.label} value={stat.value} />
            ))}
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {whyUs.points.map((point, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="shrink-0 text-yellow-300">⚡</div>
              <div>
                <div className="text-base font-semibold text-white">{point.title}</div>
                <div className="text-sm text-slate-300 leading-relaxed">{point.description}</div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </SectionShell>
  );
}