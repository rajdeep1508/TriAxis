const cols = [
  { heading:"Services", links:["Web & Mobile Dev","Cloud & DevOps","AI / ML","Cybersecurity","Data Engineering","Product Consulting"] },
  { heading:"Company",  links:["About TriAxis","Careers","Community","Blog","Press"] },
  { heading:"Resources",links:["Documentation","API Reference","Status","Changelog","Support"] },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden" style={{ background:"#07010f", borderTop:"1px solid rgba(168,85,247,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background:"linear-gradient(135deg,#e879f9 0%,#6d28d9 100%)", boxShadow:"0 0 16px rgba(232,121,249,0.4)" }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="white" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="2" fill="white"/></svg>
              </div>
              <span className="font-display text-lg font-bold tracking-wider uppercase" style={{ color:"#f5eeff" }}>TRIAXIS</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color:"#7c6a99", maxWidth:"260px" }}>
              Building next-generation digital solutions, intelligent systems, and high-performance platforms that solve real-world problems.
            </p>
            <div className="flex gap-3">
              {["X","in","GH","YT"].map((s) => (
                <button key={s} className="w-8 h-8 rounded flex items-center justify-center text-xs font-mono font-bold transition-all duration-200"
                  style={{ background:"#110820", border:"1px solid rgba(42,18,69,0.9)", color:"#7c6a99" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(232,121,249,0.4)"; e.currentTarget.style.color="#e879f9"; e.currentTarget.style.boxShadow="0 0 12px rgba(232,121,249,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(42,18,69,0.9)"; e.currentTarget.style.color="#7c6a99"; e.currentTarget.style.boxShadow="none"; }}
                >{s}</button>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <h5 className="font-display font-bold text-sm tracking-widest uppercase mb-4" style={{ color:"#f5eeff" }}>{col.heading}</h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <button className="text-sm transition-colors duration-200 text-left" style={{ color:"#7c6a99" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color="#f5eeff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color="#7c6a99")}
                    >{l}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6" style={{ borderTop:"1px solid rgba(42,18,69,0.7)" }}>
          <p className="text-xs" style={{ color:"#7c6a99" }}>© 2025 TriAxis Technologies. All rights reserved.</p>
          <p className="text-xs font-mono" style={{ color:"#7c6a99" }}>Build. Innovate. Deliver. <span style={{ color:"#e879f9" }}>Impact.</span></p>
          <div className="flex gap-4">
            {["Privacy Policy","Terms of Service","Cookie Policy"].map((l) => (
              <button key={l} className="text-xs transition-colors duration-200" style={{ color:"#7c6a99" }}
                onMouseEnter={(e) => (e.currentTarget.style.color="#f5eeff")}
                onMouseLeave={(e) => (e.currentTarget.style.color="#7c6a99")}
              >{l}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

