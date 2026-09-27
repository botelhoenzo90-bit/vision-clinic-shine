import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, Users, Settings, Rocket, BarChart3, FileCheck, Trophy } from "lucide-react";

const steps = [
  { icon: Handshake, title: "Contrato", desc: "Formalização da parceria" },
  { icon: Users, title: "Onboarding", desc: "Entendimento da sua clínica" },
  { icon: Settings, title: "Setup", desc: "Configuração das plataformas" },
  { icon: FileCheck, title: "Campanhas", desc: "Criação dos anúncios" },
  { icon: Rocket, title: "Lançamento", desc: "Campanhas ativas" },
  { icon: BarChart3, title: "Otimização", desc: "Melhoria contínua" },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 5%), hsl(0 0% 3%))" }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(45 100% 50% / 0.04) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            <span className="text-gradient-gold">Próximos Passos</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-body mt-3">O que acontece após fechar conosco</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.15, boxShadow: "0 0 30px hsl(45 100% 50% / 0.4)" }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-gold flex items-center justify-center mb-3 sm:mb-4 border-2 border-primary/50"
                  style={{ boxShadow: "0 4px 20px hsl(45 100% 50% / 0.15)" }}
                >
                  <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-background" strokeWidth={2} />
                </motion.div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center -mt-6 sm:-mt-7 relative z-10 mb-2 sm:mb-3">
                  <span className="font-display font-black text-xs sm:text-sm text-foreground">{i + 1}</span>
                </div>
                <h4 className="font-display text-sm sm:text-base font-bold text-foreground mb-1">{step.title}</h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-body">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-8 sm:mt-12 flex justify-center"
        >
          <div className="bg-gradient-gold rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
            <span className="text-sm sm:text-base font-display font-bold text-background">Sua clínica pronta para crescer em até 7 dias</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
