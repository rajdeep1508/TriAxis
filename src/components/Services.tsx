import { motion } from "framer-motion";

const services = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 8h.01M9 8h6" strokeLinecap="round"/><path d="M6 11h12" strokeLinecap="round"/></svg>,
    title: "Web & Mobile Development",
    desc: "Pixel-perfect, performant applications across web and mobile using modern frameworks.",
    accent: "#e879f9", tag: "React · Next.js · Flutter",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>,
    title: "Cloud Solutions & DevOps",
    desc: "Scalable cloud infrastructure with CI/CD pipelines and container orchestration.",
    accent: "#a855f7", tag: "AWS · GCP · Kubernetes",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
    title: "AI / ML & Automation",
    desc: "Intelligent systems that learn, adapt, and automate at scale.",
    accent: "#c084fc", tag: "PyTorch · LLMs · MLOps",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Cybersecurity & System Protection",
    desc: "Advanced threat detection, pen testing, and zero-trust architecture.",
    accent: "#f472b6", tag: "SIEM · Zero-Trust · Pen Testing",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2" strokeLinecap="round"/></svg>,
    title: "Data Engineering & Analytics",
    desc: "Pipelines, warehouses, dashboards, and real-time analytics at scale.",
    accent: "#34d399", tag: "Spark · Kafka · dbt",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17.5h7M17.5 14v7" strokeLinecap="round"/></svg>,
    title: "Product Engineering & Consulting",
    desc: "End-to-end strategy, architecture consulting, and engineering partnerships.",
    accent: "#22d3ee", tag: "Strategy · Architecture · Scale",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden" style={{ background: "#07010f" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px", opacity: 0.5 }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#e879f9" }}>◆ What We Build</p>
          <h2 className="font-display font-extrabold leading-none tracking-tight mb-5" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", color: "#f5eeff" }}>OUR SERVICES</h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "#7c6a99" }}>
            Six specialized verticals delivering intelligent, scalable, and secure digital products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative rounded-xl p-6 transition-all duration-300 cursor-default"
              style={{ background: "#110820", border: "1px solid rgba(42,18,69,0.9)" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "#16092a"; el.style.borderColor = `${s.accent}33`; el.style.boxShadow = `0 0 28px ${s.accent}12`; el.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "#110820"; el.style.borderColor = "rgba(42,18,69,0.9)"; el.style.boxShadow = "none"; el.style.transform = "translateY(0)"; }}>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `${s.accent}14`, border: `1px solid ${s.accent}33`, color: s.accent }}>
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-lg tracking-wide mb-2" style={{ color: "#f5eeff" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#7c6a99" }}>{s.desc}</p>
              <span className="inline-block px-2.5 py-1 rounded text-xs font-mono"
                style={{ background: `${s.accent}0d`, color: s.accent, border: `1px solid ${s.accent}22` }}>{s.tag}</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg,transparent,${s.accent},transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}