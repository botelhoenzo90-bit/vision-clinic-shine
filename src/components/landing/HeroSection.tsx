import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import logoAP from "@/assets/logo-ap-nobg.png";
import heroTeam from "@/assets/hero-team.png";
import MarqueeStrip from "./MarqueeStrip";

const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 3,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 3,
}));

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(0 0% 3%), hsl(0 0% 6%), hsl(0 0% 3%))" }}>
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.04),transparent_60%)]" />
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(hsl(45 100% 50% / 0.02) 1px, transparent 1px), linear-gradient(90deg, hsl(45 100% 50% / 0.02) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

          {/* Floating particles */}
          {floatingParticles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-primary/20"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, -10, 0],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            />
          ))}

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, hsl(45 100% 50% / 0.06), transparent 70%)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, hsl(45 100% 50% / 0.04), transparent 70%)" }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-16 text-center flex flex-col items-center">
          {/* Logo with pulse glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 100 }}
            className="relative mb-6"
          >
            <img src={logoAP} alt="Assessoria Prime" className="w-32 h-32 sm:w-40 sm:h-40 object-contain" />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 sm:px-5 py-2 mb-6">
            <span className="text-primary font-display font-bold text-[11px] sm:text-sm tracking-wider uppercase flex items-center gap-2 whitespace-nowrap">
              <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles className="w-4 h-4 flex-shrink-0" />
              </motion.span>
              Marketing Especializado para Clínicas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-black leading-[1] text-foreground mb-4"
          >
            SUA CLÍNICA PRECISA DA{" "}
            <motion.span
              className="text-gradient-gold inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              MAIOR ASSESSORIA DE MARKETING MÉDICO!
            </motion.span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-8 leading-relaxed">
            Somos a engrenagem invisível das maiores clínicas do Brasil. Atraia pacientes qualificados todos os dias com estratégias sob medida.
          </motion.p>

          {/* Hero image with floating effect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative mb-8"
          >
            <motion.img
              src={heroTeam}
              alt="Equipe médica"
              className="w-full max-w-md object-contain drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Glow under image */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-2xl bg-primary/20"
              animate={{ scaleX: [0.8, 1, 0.8], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.button
            onClick={scrollToForm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(45 100% 50% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-gold text-background font-display font-black text-base sm:text-lg px-10 py-4 rounded-xl inline-flex items-center gap-3 glow-gold hover:opacity-90 transition-all relative overflow-hidden group"
          >
            {/* Shimmer effect on button */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              Quero mais informações <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </div>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 1 }} className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold origin-left" />
      </section>
      <MarqueeStrip />
    </>
  );
}
