import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Users, Award } from "lucide-react";
import logoAP from "@/assets/logo-ap-nobg.png";

const pillars = [
  { icon: Target, title: "Estratégia Sob Medida", desc: "Cada clínica recebe um plano único, baseado em dados reais e metas claras." },
  { icon: TrendingUp, title: "Crescimento Previsível", desc: "Construímos sistemas que geram pacientes de forma constante e escalável." },
  { icon: Users, title: "Time Dedicado", desc: "Profissionais especializados em marketing médico ao seu lado." },
  { icon: Award, title: "Resultados Comprovados", desc: "Histórico sólido de ROI positivo em clínicas de diversos segmentos." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 6%))" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(45 100% 50%) 1px, transparent 0)`, backgroundSize: "48px 48px" }} />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(45 100% 50% / 0.05), transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(45 100% 50% / 0.04), transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", delay: 0.2, stiffness: 80 }}
            className="relative inline-block mb-6"
          >
            <img src={logoAP} alt="Assessoria Prime" className="w-24 h-24 sm:w-32 sm:h-32 object-contain" />
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
            Quem é a <span className="text-gradient-gold">Assessoria Prime</span>?
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed"
          >
            Somos uma assessoria de marketing especializada em clínicas médicas. 
            Transformamos clínicas em referências no digital com estratégias validadas, 
            equipe dedicada e resultados mensuráveis.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px hsl(45 100% 50% / 0.1)" }}
                className="bg-card/40 border border-border/20 rounded-xl p-6 sm:p-8 hover:border-primary/40 transition-all group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {/* Bottom glow line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gold origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="mt-14 sm:mt-16"
        >
          <div className="rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500" style={{ background: "linear-gradient(135deg, hsl(0 0% 6%), hsl(0 0% 10%))" }}>
            <motion.div
              className="absolute top-0 left-0 w-1 h-full bg-gradient-gold rounded-full"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              style={{ transformOrigin: "top" }}
            />
            <p className="text-lg sm:text-xl lg:text-2xl font-display font-bold leading-relaxed text-foreground/90 pl-6">
              "Clínicas bem posicionadas no digital não precisam disputar preço. 
              <motion.span
                className="text-primary"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              > Elas se tornam referência.</motion.span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
