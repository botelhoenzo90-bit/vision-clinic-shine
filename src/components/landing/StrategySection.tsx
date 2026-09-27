import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Palette, BarChart3, MessageCircle, TrendingUp } from "lucide-react";

const pillars = [
  { num: "01", title: "Planejamento Estratégico", icon: Target, desc: "Análise de mercado, concorrência e posicionamento digital" },
  { num: "02", title: "Criativos Profissionais", icon: Palette, desc: "Anúncios que geram atenção, desejo e ação" },
  { num: "03", title: "Tráfego Pago", icon: BarChart3, desc: "Meta Ads e Google Ads com otimização diária" },
  { num: "04", title: "Otimização Diária", icon: TrendingUp, desc: "Campanhas escaláveis com ROI positivo" },
  { num: "05", title: "Conversão no WhatsApp", icon: MessageCircle, desc: "Leads qualificados em pacientes agendados" },
];

export default function StrategySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 3%), hsl(0 0% 5%))" }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-gold" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.015) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.015) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-3 sm:mb-4">
            Como funciona nossa <span className="text-gradient-gold">Estratégia</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-body max-w-xl mx-auto">
            Nosso método é baseado em 5 pilares fundamentais para gerar pacientes
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl mx-auto">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="bg-secondary/60 backdrop-blur rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center gap-4 sm:gap-6 border border-border/30 hover:border-primary/40 transition-all cursor-default group relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:glow-gold transition-shadow flex-shrink-0"
                >
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-background" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-foreground leading-tight">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body hidden sm:block">{pillar.desc}</p>
                </div>
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-primary flex-shrink-0">{pillar.num}</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gold origin-left"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Funnel visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 sm:mt-16 flex flex-col items-center"
        >
          <div className="flex flex-col items-center gap-1 w-full max-w-md">
            {["Planejamento", "Criativos", "Tráfego Pago", "Otimização", "Conversão"].map((label, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
                className="h-8 sm:h-10 rounded-lg flex items-center justify-center text-xs sm:text-sm font-display font-bold text-background"
                style={{
                  width: `${100 - i * 12}%`,
                  background: `linear-gradient(135deg, hsl(${50 - i * 3} 100% ${58 - i * 4}%), hsl(${40 - i * 2} 100% ${48 - i * 4}%))`,
                }}
              >
                {label}
              </motion.div>
            ))}
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-4 sm:mt-6 text-primary font-display font-black text-sm sm:text-lg flex items-center gap-2"
          >
            ↓ PACIENTES AGENDADOS ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
