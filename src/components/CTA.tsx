import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(""); }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ background:"#07010f" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 80% 60% at 50% 50%,rgba(168,85,247,0.1) 0%,transparent 70%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,rgba(232,121,249,0.3),transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background:"linear-gradient(90deg,transparent,rgba(168,85,247,0.2),transparent)" }} />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color:"#e879f9" }}>◆ Let's Build Together</p>
          <h2 className="font-display font-extrabold leading-none tracking-tight mb-5" style={{ fontSize:"clamp(2.4rem,5.5vw,4.2rem)", color:"#f5eeff" }}>
            READY TO{" "}
            <span className="text-glow-pink" style={{ color:"#e879f9" }}>ACCELERATE</span>?
          </h2>
          <p className="text-sm leading-relaxed mb-10 max-w-lg mx-auto" style={{ color:"#7c6a99" }}>
            Whether you need a development partner, a strategic advisor, or a team to build your next product — we're here.
          </p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" required
                className="flex-1 px-4 py-3 rounded text-sm outline-none transition-all duration-200"
                style={{ background:"#110820", border:"1px solid rgba(232,121,249,0.2)", color:"#f5eeff" }}
                onFocus={(e) => (e.target.style.borderColor="rgba(232,121,249,0.6)")}
                onBlur={(e)  => (e.target.style.borderColor="rgba(232,121,249,0.2)")}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded font-semibold text-sm tracking-wide whitespace-nowrap transition-all duration-200"
                style={{ background:"linear-gradient(135deg,#e879f9 0%,#6d28d9 100%)", color:"#fff", boxShadow:"0 0 20px rgba(232,121,249,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow="0 0 32px rgba(232,121,249,0.5)"; e.currentTarget.style.transform="translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow="0 0 20px rgba(232,121,249,0.3)"; e.currentTarget.style.transform="translateY(0)"; }}
              >
                Get in Touch
              </button>
            </form>
          ) : (
            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl"
              style={{ background:"rgba(52,211,153,0.08)", border:"1px solid rgba(52,211,153,0.3)", color:"#34d399" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span className="text-sm font-medium">Message sent! We'll be in touch within 24 hours.</span>
            </motion.div>
          )}

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {["triaxis.in","github.com/triaxis","linkedin.com/company/triaxis"].map((l) => (
              <span key={l} className="text-xs font-mono transition-colors duration-200 cursor-default"
                style={{ color:"#7c6a99" }}
                onMouseEnter={(e) => (e.currentTarget.style.color="#e879f9")}
                onMouseLeave={(e) => (e.currentTarget.style.color="#7c6a99")}
              >{l}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
