import { motion } from "framer-motion";

const stats = [
  { value: "150+",  label: "Projects Delivered", icon: "⬡" },
  { value: "40+",   label: "Enterprise Clients",  icon: "◈" },
  { value: "6",     label: "Service Verticals",   icon: "◆" },
  { value: "99.9%", label: "Platform Uptime",     icon: "▲" },
  { value: "3+",    label: "Years of Excellence", icon: "◉" },
];

export default function Stats() {
  return (
    <section className="relative py-5 overflow-hidden"
      style={{ background: "#07010f", borderTop: "1px solid rgba(168,85,247,0.1)", borderBottom: "1px solid rgba(168,85,247,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3">
              <span className="text-xl" style={{ color: "#e879f9", opacity: 0.6 }}>{s.icon}</span>
              <div>
                <div className="font-display font-bold text-2xl leading-none" style={{ color: "#e879f9" }}>{s.value}</div>
                <div className="text-xs mt-0.5" style={{ color: "#7c6a99" }}>{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}