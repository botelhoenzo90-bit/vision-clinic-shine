import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Sparkles, Users, TrendingUp, HeartHandshake, ChevronRight } from "lucide-react";
import logoAP from "@/assets/logo-ap-nobg.png";

export default function SlideCTA({ onGoToFirst }: { onGoToFirst?: () => void }) {
  const benefits = [
    { icon: Users, text: "Mais pacientes todos os meses" },
    { icon: TrendingUp, text: "Crescimento previsível e escalável" },
    { icon: HeartHandshake, text: "Parceria dedicada ao seu sucesso" },
  ];

  return (
    <SlideLayout className="bg-[hsl(0,0%,3%)] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.08),transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-gold" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-gold" />
        {/* Floating particles - spread around edges */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: "hsl(45 100% 50%)",
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 4) * 22}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`r-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "hsl(45 100% 50%)",
              right: `${5 + i * 10}%`,
              bottom: `${15 + (i % 3) * 20}%`,
              opacity: 0.25,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <img
            src={logoAP}
            alt="Assessoria Prime"
            className="w-[260px] h-[260px] object-contain"
          />
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-[120px] font-black leading-[0.9] text-foreground text-center mb-6"
        >
          Vamos <span className="text-gradient-gold">começar?</span>
        </motion.h2>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[36px] text-muted-foreground font-body text-center max-w-[900px] mb-12"
        >
          Sua clínica merece ser referência. Vamos transformar sua presença digital juntos.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0 0 30px hsl(45 100% 50% / 0.3)", "0 0 60px hsl(45 100% 50% / 0.5)", "0 0 30px hsl(45 100% 50% / 0.3)"] }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            className="bg-gradient-gold rounded-2xl px-16 py-8 flex items-center gap-5 cursor-pointer"
          >
            <Sparkles className="w-10 h-10 text-background" />
            <span className="font-display font-black text-[36px] text-background">QUERO CRESCER AGORA</span>
          </motion.div>
        </motion.div>

        {/* Benefits - 3x2 grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 grid grid-cols-3 gap-x-10 gap-y-5"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[20px] text-muted-foreground font-body">{b.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Arrow to go back to first slide */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.15, x: 8 }}
          onClick={onGoToFirst}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center hover:bg-primary/30 transition-all cursor-pointer"
        >
          <ChevronRight className="w-8 h-8 text-primary" />
        </motion.button>
      </div>
    </SlideLayout>
  );
}
