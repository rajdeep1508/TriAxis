import { motion } from "framer-motion";
import { lazy, Suspense, useCallback } from "react";
import ModelErrorBoundary from "./ModelErrorBoundary";

const Scene3D = lazy(() => import("./Scene3D"));

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

interface HeroProps {
  modelUrl: string | null;
  onModelLoad: (url: string) => void;
}

function UploadZone({ onModelLoad }: { onModelLoad: (url: string) => void }) {
  const handleFile = useCallback(
    (file: File) => {
      if (!file.name.endsWith(".glb") && !file.name.endsWith(".gltf")) return;
      onModelLoad(URL.createObjectURL(file));
    },
    [onModelLoad]
  );

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4 rounded-2xl cursor-pointer transition-all duration-300"
      style={{ border:"2px dashed rgba(232,121,249,0.25)", background:"rgba(232,121,249,0.02)" }}
      onDragOver={(e) => { e.preventDefault(); e.currentTarget.style.borderColor="rgba(232,121,249,0.6)"; e.currentTarget.style.background="rgba(232,121,249,0.06)"; }}
      onDragLeave={(e) => { e.currentTarget.style.borderColor="rgba(232,121,249,0.25)"; e.currentTarget.style.background="rgba(232,121,249,0.02)"; }}
      onDrop={(e) => {
        e.preventDefault();
        e.currentTarget.style.borderColor="rgba(232,121,249,0.25)";
        e.currentTarget.style.background="rgba(232,121,249,0.02)";
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
      }}
      onClick={() => document.getElementById("hero-glb-input")?.click()}
    >
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background:"rgba(232,121,249,0.08)", border:"1px solid rgba(232,121,249,0.2)" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e879f9" strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeLinecap="round"/>
          <polyline points="17 8 12 3 7 8" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="3" x2="12" y2="15" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="text-center px-4">
        <p className="font-display font-bold text-base tracking-wide mb-1" style={{ color:"#f5eeff" }}>Drop your GLB here</p>
        <p className="text-xs" style={{ color:"#7c6a99" }}>or <span style={{ color:"#e879f9" }}>click to upload</span> mew.glb</p>
      </div>
      <p className="text-xs font-mono" style={{ color:"rgba(124,106,153,0.5)" }}>
        (In the final deployed site this won't appear — mew.glb loads from public/)
      </p>
      <input id="hero-glb-input" type="file" accept=".glb,.gltf" className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
    </div>
  );
}

function SceneWithFallback({ url, onModelLoad }: { url: string | null; onModelLoad: (u: string) => void }) {
  if (!url) return <UploadZone onModelLoad={onModelLoad} />;
  return (
    <ModelErrorBoundary fallback={<UploadZone onModelLoad={onModelLoad} />}>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-14 h-14 rounded-full animate-spin" style={{ border:"2px solid rgba(232,121,249,0.15)", borderTopColor:"#e879f9" }} />
        </div>
      }>
        <Scene3D url={url} />
      </Suspense>
    </ModelErrorBoundary>
  );
}

export default function Hero({ modelUrl, onModelLoad }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen grid-bg overflow-hidden" style={{ background:"#07010f" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 70% 60% at 65% 50%,rgba(168,85,247,0.13) 0%,transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 40% 40% at 10% 80%,rgba(232,121,249,0.07) 0%,transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 35% 35% at 90% 10%,rgba(34,211,238,0.06) 0%,transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center min-h-screen gap-8 py-24">
        <div className="flex flex-col gap-6 z-10">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, ease }}>
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background:"rgba(232,121,249,0.08)", border:"1px solid rgba(232,121,249,0.25)", color:"#e879f9" }}>
              ◆ 3D Web Experience · TriAxis
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.75, delay:0.1, ease }}
            className="font-display font-extrabold leading-none tracking-tight"
            style={{ fontSize:"clamp(3rem,7vw,5.5rem)", color:"#f5eeff" }}
          >
            BUILD.{" "}
            <span className="text-glow-pink" style={{ color:"#e879f9", display:"block" }}>INNOVATE.</span>
            DELIVER.{" "}
            <span className="text-glow-violet" style={{ color:"#a855f7" }}>IMPACT.</span>
          </motion.h1>

          <motion.p initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.22, ease }}
            className="text-base leading-relaxed max-w-md" style={{ color:"#7c6a99" }}
          >
            TriAxis engineers next-generation digital solutions — intelligent systems,
            cloud-native platforms, and data-driven products that solve real-world problems at scale.
          </motion.p>

          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.32, ease }} className="flex flex-wrap gap-3">
            <a href="#services" className="px-7 py-3 rounded font-semibold text-sm tracking-wide transition-all duration-200"
              style={{ background:"linear-gradient(135deg,#e879f9 0%,#6d28d9 100%)", color:"#fff", boxShadow:"0 0 24px rgba(232,121,249,0.35)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 0 40px rgba(232,121,249,0.55)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 0 24px rgba(232,121,249,0.35)"; }}
            >Explore Services</a>
            <a href="#about" className="px-7 py-3 rounded font-semibold text-sm tracking-wide transition-all duration-200"
              style={{ background:"transparent", border:"1px solid rgba(232,121,249,0.3)", color:"#e879f9" }}
              onMouseEnter={(e) => { e.currentTarget.style.background="rgba(232,121,249,0.06)"; e.currentTarget.style.borderColor="rgba(232,121,249,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor="rgba(232,121,249,0.3)"; }}
            >Learn More</a>
          </motion.div>

          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.42, ease }} className="flex flex-wrap items-center gap-6 pt-2">
            {[{ value:"150+", label:"Projects Delivered" }, { value:"40+", label:"Enterprise Clients" }, { value:"99%", label:"Uptime SLA" }].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-none" style={{ color:"#e879f9" }}>{s.value}</span>
                <span className="text-xs mt-0.5" style={{ color:"#7c6a99" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1.1, delay:0.15, ease }}
          className="relative w-full" style={{ height:"clamp(320px,55vw,580px)" }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ background:"rgba(168,85,247,0.02)", border:"1px solid rgba(168,85,247,0.1)" }}>
            <SceneWithFallback url={modelUrl} onModelLoad={onModelLoad} />
          </div>
          {["top-3 right-3","top-3 left-3","bottom-3 right-3"].map((pos) => (
            <div key={pos} className={`absolute ${pos} w-1.5 h-1.5 rounded-full`} style={{ background:"#e879f9", boxShadow:"0 0 8px #e879f9" }} />
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{ color:"#7c6a99" }}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
}