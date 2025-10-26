import { useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "../data/content";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const { business, navigation } = siteData;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* brand */}
        <motion.a
          href="#top"
          className="text-lg font-semibold tracking-tight text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            {business.name}
          </span>
        </motion.a>

        {/* nav links desktop */}
        <nav className="hidden md:flex gap-8 text-sm text-slate-200/80">
          {navigation.links.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="hover:text-yellow-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:+40${business.phone.replace(/\s/g, '')}`}
            className="text-slate-900 bg-yellow-300 font-medium rounded-xl px-4 py-2 shadow-[0_20px_60px_-5px_rgba(250,204,21,0.4)] hover:shadow-[0_30px_80px_-5px_rgba(250,204,21,0.6)] hover:bg-yellow-200 transition"
          >
            {business.phone}
          </a>
        </nav>

        {/* burger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200/80 hover:text-yellow-300 transition-colors"
          aria-label="menu"
        >
          <div className="w-6 space-y-1.5">
            <span className="block h-[2px] bg-current rounded" />
            <span className="block h-[2px] bg-current rounded" />
            <span className="block h-[2px] bg-current rounded" />
          </div>
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mx-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_120px_-10px_rgba(0,0,0,0.8)]"
        >
          <nav className="flex flex-col p-6 text-base text-slate-100/90">
            {navigation.links.map((link) => (
              <a 
                key={link.href}
                className="py-3" 
                href={link.href} 
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:+40${business.phone.replace(/\s/g, '')}`}
              className="mt-4 text-center text-slate-900 bg-yellow-300 font-medium rounded-xl px-4 py-3 shadow-[0_20px_60px_-5px_rgba(250,204,21,0.4)]"
            >
              {business.phone}
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}