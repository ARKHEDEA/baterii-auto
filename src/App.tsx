import { NavBar, Hero, Services, WhyUs, Contact, Footer } from "./components";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-slate-100 selection:bg-yellow-400/30 selection:text-yellow-200">
      <NavBar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
