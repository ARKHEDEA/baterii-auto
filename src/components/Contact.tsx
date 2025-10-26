import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { siteData } from "../data/content";

export function Contact() {
  const { contact, business } = siteData;

  return (
    <SectionShell
      id="contact"
      eyebrow={contact.eyebrow}
      title={contact.title}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 lg:grid-cols-2"
      >
        {/* call card */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-300/10 via-yellow-500/5 to-transparent p-8 backdrop-blur-xl shadow-[0_30px_120px_-10px_rgba(0,0,0,0.9)]">
          <div className="text-sm font-semibold text-yellow-300">{contact.urgencyCard.label}</div>
          <div className="mt-2 text-3xl font-semibold text-white">{business.phone}</div>
          <div className="mt-4 text-sm leading-relaxed text-slate-300">
            {contact.urgencyCard.description}
          </div>
        </div>

        {/* form mockup */}
        <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl shadow-[0_30px_120px_-10px_rgba(0,0,0,0.9)]">
          <div className="grid gap-4 text-sm text-slate-200">
            <label className="flex flex-col">
              <span className="mb-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                {contact.form.fields.name.label}
              </span>
              <input
                disabled
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500/70 outline-none"
                placeholder={contact.form.fields.name.placeholder}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                {contact.form.fields.phone.label}
              </span>
              <input
                disabled
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500/70 outline-none"
                placeholder={contact.form.fields.phone.placeholder}
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                {contact.form.fields.carModel.label}
              </span>
              <input
                disabled
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500/70 outline-none"
                placeholder={contact.form.fields.carModel.placeholder}
              />
            </label>
          </div>

          <button
            disabled
            className="mt-6 w-full rounded-xl bg-yellow-300 px-6 py-3 text-sm font-semibold text-slate-900 opacity-40"
          >
            {contact.form.submitText}
          </button>
        </form>
      </motion.div>
    </SectionShell>
  );
}