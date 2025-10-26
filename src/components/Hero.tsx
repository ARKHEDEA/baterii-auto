import { motion } from "framer-motion";
import { siteData } from "../data/content";

export function Hero() {
  const { hero } = siteData;

  return (
    <section
      id="top"
      className="relative flex items-center justify-center pt-28 pb-24 md:pt-32 md:pb-32 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />
      </div>

      {/* card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-yellow-300/90 backdrop-blur-xl shadow-[0_30px_120px_-10px_rgba(0,0,0,0.8)]">
          {hero.badge}
        </div>

        <h1 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-5xl md:leading-[1.1]">
          {hero.title}
          <span className="block bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
            {hero.subtitle}
          </span>
        </h1>

        <p className="mt-6 text-base text-slate-300 md:text-lg">
          {hero.description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-xl bg-yellow-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_60px_-5px_rgba(250,204,21,0.5)] hover:bg-yellow-200 hover:shadow-[0_30px_80px_-5px_rgba(250,204,21,0.6)] transition"
          >
            {hero.cta.primary}
          </a>
          <a
            href="#services"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl hover:bg-white/10 hover:text-white transition"
          >
            {hero.cta.secondary}
          </a>
        </div>
      </motion.div>
    </section>
  );
}