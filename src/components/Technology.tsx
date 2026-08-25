import { motion } from "framer-motion";

const stacks = [
  { label: "React",      color: "#61dafb" }, { label: "Next.js",    color: "#ffffff" },
  { label: "TypeScript", color: "#3178c6" }, { label: "Three.js",   color: "#e879f9" },
  { label: "Node.js",    color: "#68a063" }, { label: "Python",     color: "#f7c948" },
  { label: "Kubernetes", color: "#326ce5" }, { label: "Terraform",  color: "#7b42bc" },
  { label: "PostgreSQL", color: "#336791" }, { label: "Redis",      color: "#d82c20" },
  { label: "PyTorch",    color: "#ee4c2c" }, { label: "Docker",     color: "#2496ed" },
  { label: "GraphQL",    color: "#e10098" }, { label: "Go",         color: "#00add8" },
];

const outcomes = [
  { icon: "▲", label: "Performance", value: "<100ms", desc: "API response targets",   color: "#e879f9" },
  { icon: "◆", label: "Scalability", value: "10M+",   desc: "Events processed/day",  color: "#a855f7" },
  { icon: "◉", label: "Reliability", value: "99.9%",  desc: "Guaranteed uptime SLA", color: "#34d399" },
  { icon: "◈", label: "Security",    value: "SOC 2",  desc: "Compliant architecture", color: "#22d3ee" },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 overflow-hidden" style={{ background: "#07010f" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 50% at 15% 50%,rgba(232,121,249,0.07) 0%,transparent 65%)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#e879f9" }}>◆ Our Stack</p>
          <h2 className="font-display font-extrabold leading-none tracking-tight mb-5" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", color: "#f5eeff" }}>TECHNOLOGY</h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "#7c6a99" }}>Battle-tested technologies ensuring every product is fast, reliable, and future-proof.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="font-display font-bold text-lg tracking-wide mb-6" style={{ color: "#f5eeff" }}>CORE TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2.5">
              {stacks.map((s, i) => (
                <motion.span key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide cursor-default transition-all duration-200"
                  style={{ background: `${s.color}10`, border: `1px solid ${s.color}28`, color: s.color }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = `${s.color}20`; e.currentTarget.style.boxShadow = `0 0 12px ${s.color}20`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = `${s.color}10`; e.currentTarget.style.boxShadow = "none"; }}>
                  {s.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <h3 className="font-display font-bold text-lg tracking-wide mb-6" style={{ color: "#f5eeff" }}>ENGINEERING TARGETS</h3>
            <div className="grid grid-cols-2 gap-4">
              {outcomes.map((o, i) => (
                <motion.div key={o.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl p-5" style={{ background: "#110820", border: `1px solid ${o.color}1a` }}>
                  <div className="text-xl mb-2" style={{ color: o.color }}>{o.icon}</div>
                  <div className="font-display font-extrabold text-2xl leading-none mb-1" style={{ color: o.color }}>{o.value}</div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: "#f5eeff" }}>{o.label}</div>
                  <div className="text-xs" style={{ color: "#7c6a99" }}>{o.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}