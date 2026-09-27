import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { FileCheck, Users, Settings, Rocket, BarChart3, Handshake, Trophy } from "lucide-react";

const processSteps = [
  { icon: Handshake, title: "Contrato", desc: "Formalização da parceria e alinhamento" },
  { icon: Users, title: "Onboarding", desc: "Entendimento da sua clínica e público" },
  { icon: Settings, title: "Setup", desc: "Configuração das plataformas de anúncio" },
  { icon: FileCheck, title: "Campanhas", desc: "Criação dos anúncios e criativos" },
  { icon: Rocket, title: "Lançamento", desc: "Campanhas no ar com monitoramento" },
  { icon: BarChart3, title: "Otimização", desc: "Relatórios e melhorias contínuas" },
];

export default function SlideProcess() {
  return (
    <SlideLayout className="overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(45 30% 96%), hsl(40 20% 93%), hsl(50 15% 91%))" }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(45 100% 50% / 0.06) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
        <div className="absolute top-0 left-0 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,hsl(45_100%_50%/0.08),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.06),transparent_70%)]" />
      </div>

      <div className="relative z-10 flex flex-col h-full px-16 py-10">
        {/* Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <h2 className="font-display text-[84px] font-black leading-none text-[hsl(0,0%,10%)] mb-2">
            <span style={{ background: "linear-gradient(135deg, hsl(40 100% 40%), hsl(45 100% 50%), hsl(48 100% 55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Próximos Passos</span>
          </h2>
          <p className="text-[28px] text-[hsl(0,0%,40%)] font-body mt-2">O que acontece após fechar conosco</p>
        </motion.div>

        {/* Horizontal connected timeline */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative px-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute top-[60px] left-[100px] right-[100px] h-[4px] origin-left rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(40 100% 45%), hsl(45 100% 50%), hsl(40 100% 45%))" }}
            />

            <div className="grid grid-cols-6 gap-4 relative">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0, y: 40, transition: { duration: 0.3, delay: i * 0.05 } }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, boxShadow: "0 0 30px hsl(45 100% 50% / 0.4)" }}
                      className="w-[120px] h-[120px] rounded-full flex items-center justify-center relative z-10 border-4"
                      style={{
                        background: "linear-gradient(135deg, hsl(40 100% 42%), hsl(45 100% 50%), hsl(48 100% 55%))",
                        borderColor: "hsl(45 100% 55%)",
                        boxShadow: "0 4px 20px hsl(45 100% 50% / 0.2)",
                      }}
                    >
                      <Icon className="w-12 h-12 text-[hsl(0,0%,5%)]" strokeWidth={2.5} />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                      className="w-10 h-10 rounded-full flex items-center justify-center -mt-4 relative z-20 border-2"
                      style={{
                        background: "hsl(0 0% 100%)",
                        borderColor: "hsl(45 100% 50%)",
                      }}
                    >
                      <span className="font-display font-black text-[18px] text-[hsl(0,0%,10%)]">{i + 1}</span>
                    </motion.div>

                    <h4 className="font-display text-[30px] font-black text-[hsl(0,0%,10%)] mt-4 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[18px] text-[hsl(0,0%,40%)] font-body mt-2 leading-snug max-w-[220px]">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex items-center justify-center mt-4"
        >
          <div className="flex items-center gap-3 rounded-xl px-8 py-4" style={{ background: "linear-gradient(135deg, hsl(40 100% 42%), hsl(45 100% 50%), hsl(48 100% 55%))" }}>
            <Trophy className="w-7 h-7 text-[hsl(0,0%,5%)]" />
            <span className="text-[24px] font-display font-bold text-[hsl(0,0%,5%)]">Sua clínica pronta para crescer em até 7 dias</span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
