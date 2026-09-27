import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowUp } from "lucide-react";
import logoAP from "@/assets/logo-ap-nobg.png";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 5%), hsl(0 0% 3%))" }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.06),transparent_60%)]" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
            style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
        <motion.img
          src={logoAP}
          alt="Assessoria Prime"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain mx-auto mb-6 sm:mb-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4 sm:mb-6"
        >
          Vamos <span className="text-gradient-gold">começar?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-base lg:text-lg text-muted-foreground font-body mb-8 sm:mb-10 max-w-lg mx-auto"
        >
          Sua clínica merece ser referência. Vamos transformar sua presença digital juntos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0 0 20px hsl(45 100% 50% / 0.2)", "0 0 50px hsl(45 100% 50% / 0.4)", "0 0 20px hsl(45 100% 50% / 0.2)"] }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            className="bg-gradient-gold rounded-xl sm:rounded-2xl px-8 sm:px-12 py-4 sm:py-5 inline-flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
            <span className="font-display font-black text-base sm:text-xl text-background">QUERO CRESCER AGORA</span>
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
