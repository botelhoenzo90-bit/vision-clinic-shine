import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import officeImg from "@/assets/office-modern.jpg";

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Image with zoom-in reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full overflow-hidden relative"
      >
        <motion.img
          src={officeImg}
          alt="Equipe Assessoria Prime"
          className="w-full h-56 sm:h-64 lg:h-72 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/20" />
      </motion.div>

      {/* Gold bg with text */}
      <div className="bg-primary py-16 sm:py-20 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
        {/* Animated background patterns */}
        <motion.div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, hsl(0 0% 0%) 1px, transparent 0)`, backgroundSize: "32px 32px" }}
          animate={{ backgroundPosition: ["0px 0px", "32px 32px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating accent shapes */}
        <motion.div
          className="absolute top-4 right-8 w-16 h-16 border-2 border-primary-foreground/10 rounded-full"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-6 left-12 w-8 h-8 border border-primary-foreground/10 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-foreground/60 mb-6 block"
          >
            RECEBA UM TIME EXCLUSIVO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] mb-6"
          >
            A <span className="underline decoration-primary-foreground/30 underline-offset-4">ASSESSORIA PRIME</span>{" "}
            ESTRUTURA O MARKETING DA SUA CLÍNICA COM BASE NA SUA{" "}
            <motion.span
              className="font-black italic"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              NECESSIDADE
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base text-primary-foreground/80 font-body leading-relaxed max-w-2xl mx-auto"
          >
            Tenha um time de especialistas ao seu lado ou terceirize totalmente seu marketing e setor comercial com a Assessoria Prime. 
            Sem dor de cabeça com contratações, gestão de equipe, riscos trabalhistas ou burocracias — você foca na sua clínica, e a gente foca em fazer ela crescer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
