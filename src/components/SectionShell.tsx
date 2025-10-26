import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function SectionShell({ id, eyebrow, title, children }: SectionShellProps) {
  return (
    <section id={id} className="relative scroll-mt-24 py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="text-[11px] font-medium uppercase tracking-wider text-yellow-300/80">{eyebrow}</div>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-4xl">{title}</h2>
        </motion.div>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}