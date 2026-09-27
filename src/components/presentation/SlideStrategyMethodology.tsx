import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Target, Palette, BarChart3, MessageCircle, TrendingUp } from "lucide-react";

const pillars = [
  { num: "01", title: "Planejamento Estratégico", icon: Target, desc: "Análise de mercado, concorrência e posicionamento digital" },
  { num: "02", title: "Criativos Profissionais", icon: Palette, desc: "Anúncios que geram atenção, desejo e ação" },
  { num: "03", title: "Tráfego Pago", icon: BarChart3, desc: "Meta Ads e Google Ads com otimização diária" },
  { num: "04", title: "Otimização Diária", icon: TrendingUp, desc: "Campanhas escaláveis com ROI positivo" },
  { num: "05", title: "Conversão no WhatsApp", icon: MessageCircle, desc: "Leads qualificados em pacientes agendados" },
];

const funnelSteps = [
  { label: "Planejamento Estratégico", width: 100 },
  { label: "Criação de Criativos Profissionais", width: 86 },
  { label: "Gestão Estratégica de Tráfego Pago", width: 72 },
  { label: "Otimização Diária", width: 58 },
  { label: "Conversão no WhatsApp", width: 56 },
];

export default function SlideStrategyMethodology() {
  return (
    <SlideLayout className="bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-gold" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-gold" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.02) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.02) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }} />
      </div>

      <div className="relative z-10 flex flex-col h-full px-16 py-10">
        {/* Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-[80px] font-black leading-none text-foreground mb-2">
            Como funciona nossa <span className="text-gradient-gold">Estratégia</span>
          </h2>
          <p className="text-[26px] text-muted-foreground font-body">
            Nosso método é baseado em 5 pilares fundamentais para gerar pacientes:
          </p>
        </motion.div>

        <div className="flex-1 flex gap-12 items-stretch">
          {/* Left - Pillars */}
          <div className="flex-1 flex flex-col gap-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ x: -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ opacity: 0, x: -80, transition: { duration: 0.3, delay: i * 0.05 } }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  whileHover={{ x: 12, scale: 1.03, boxShadow: "0 0 30px hsl(45 100% 50% / 0.15)" }}
                  className="bg-secondary rounded-2xl px-8 py-5 flex items-center gap-6 relative overflow-hidden group cursor-default border border-border/30 hover:border-primary/40 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:glow-gold transition-shadow flex-shrink-0"
                  >
                    <Icon className="w-7 h-7 text-background" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display text-[28px] font-bold text-foreground leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[18px] text-muted-foreground font-body">{pillar.desc}</p>
                  </div>
                  <span className="font-display text-[48px] font-black text-primary">{pillar.num}</span>
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold origin-left"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Right - Funnel GOLDEN */}
          <div className="w-[520px] flex flex-col items-center justify-center">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ delay: 0.5 }}
              className="font-display text-[36px] font-bold text-foreground mb-6"
            >
              Funil de <span className="text-gradient-gold">Vendas</span>
            </motion.h3>
            <div className="flex flex-col items-center gap-[3px] w-full">
              {funnelSteps.map((step, i) => {
                const isLast = i === funnelSteps.length - 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ opacity: 0, scaleX: 0, transition: { duration: 0.3, delay: (4 - i) * 0.05 } }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                    whileHover={{ scale: 1.06 }}
                    className="relative cursor-default group"
                    style={{ width: `${step.width}%` }}
                  >
                    <svg viewBox="0 0 400 90" className={`w-full ${isLast ? 'h-[130px]' : 'h-[88px]'}`} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`gold-grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor={`hsl(${50 - i * 3}, 100%, ${58 - i * 4}%)`} />
                          <stop offset="50%" stopColor={`hsl(${45 - i * 2}, 100%, ${52 - i * 4}%)`} />
                          <stop offset="100%" stopColor={`hsl(${40 - i * 2}, 100%, ${48 - i * 4}%)`} />
                        </linearGradient>
                      </defs>
                      {isLast ? (
                        <polygon
                          points="5,0 395,0 200,85"
                          fill={`url(#gold-grad-${i})`}
                        />
                      ) : (
                        <polygon
                          points="0,0 400,0 380,90 20,90"
                          fill={`url(#gold-grad-${i})`}
                        />
                      )}
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-[18px] text-[hsl(0,0%,5%)] tracking-wide z-10 text-center px-10 leading-tight" style={{ marginTop: isLast ? "-15px" : "0" }}>
                      {step.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
              transition={{ delay: 1.5 }}
              className="mt-8 text-primary font-display font-black text-[30px] flex items-center gap-3"
            >
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.span>
              PACIENTES AGENDADOS
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
