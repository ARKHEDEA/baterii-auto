import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { siteData } from "../data/content";

export function Services() {
  const { services } = siteData;

  return (
    <SectionShell
      id="services"
      eyebrow={services.eyebrow}
      title={services.title}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.items.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_30px_120px_-10px_rgba(0,0,0,0.9)] hover:bg-white/[0.06] hover:shadow-[0_40px_160px_-10px_rgba(0,0,0,0.9)] transition"
          >
            <div className="text-2xl">{service.icon}</div>
            <div className="mt-4 text-base font-semibold text-white">{service.title}</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-300">{service.description}</div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}