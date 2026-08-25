import { motion } from "framer-motion";

const values = [
  { title:"Engineering Excellence", desc:"We hold our code to the highest standards — reviewed, tested, and optimized before it ships." },
  { title:"Innovation Driven",      desc:"Experimentation is baked into our culture. We reward bold ideas and learn from fast iterations." },
  { title:"Client Partnership",     desc:"We embed ourselves in your goals and work as an extension of your team, not a vendor." },
  { title:"Scalable by Design",     desc:"Every system we build is architected to handle tomorrow's demands, not just today's." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background:"#07010f" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 60% 50% at 85% 50%,rgba(168,85,247,0.08) 0%,transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div initial={{ opacity:0, x:-36 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color:"#a855f7" }}>◆ Who We Are</p>
            <h2 className="font-display font-extrabold leading-none tracking-tight mb-6" style={{ fontSize:"clamp(2.2rem,4.5vw,3.5rem)", color:"#f5eeff" }}>
              BUILT FOR THE{" "}
              <span style={{ color:"#e879f9" }}>NEXT</span>
              <br />GENERATION
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color:"#7c6a99" }}>
              TriAxis is a technology company focused on building next-generation digital solutions,
              intelligent systems, and high-performance platforms that solve real-world problems.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color:"#7c6a99" }}>
              We combine innovation, engineering excellence, and data-driven strategies to deliver
              scalable, secure, and efficient products for modern businesses.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
              style={{ color:"#e879f9" }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
            >
              Start a project with us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>

          <motion.div initial={{ opacity:0, x:36 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.15 }} className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.2+i*0.1 }}
                className="rounded-xl p-5 transition-all duration-300"
                style={{ background:"#110820", border:"1px solid rgba(168,85,247,0.15)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(232,121,249,0.35)"; e.currentTarget.style.background="#16092a"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(168,85,247,0.15)"; e.currentTarget.style.background="#110820"; }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background:"rgba(232,121,249,0.1)", border:"1px solid rgba(232,121,249,0.2)" }}>
                  <div className="w-2 h-2 rounded-full" style={{ background:"#e879f9" }} />
                </div>
                <h4 className="font-display font-bold text-sm tracking-wide mb-1.5" style={{ color:"#f5eeff" }}>{v.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color:"#7c6a99" }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
