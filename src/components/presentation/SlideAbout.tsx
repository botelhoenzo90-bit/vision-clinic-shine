import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { UserPlus, Crown, Gem, BadgeDollarSign, Sparkles } from "lucide-react";
import officeImg from "@/assets/office-modern.jpg";

export default function SlideAbout() {
  const benefits = [
    { icon: UserPlus, text: "Atrair mais pacientes" },
    { icon: Crown, text: "Aumentar a autoridade da marca" },
    { icon: Gem, text: "Valorizar os procedimentos" },
    { icon: BadgeDollarSign, text: "Cobrar mais pelos serviços" },
  ];

  return (
    <SlideLayout className="bg-primary">
      <div className="relative z-10 flex h-full">
        {/* Left side - Office image */}
        <div className="w-[620px] relative overflow-hidden">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img src={officeImg} alt="Escritório moderno" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary" />
            <div className="absolute inset-0 bg-primary/20" />
          </motion.div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 flex flex-col justify-center pr-16 pl-16">
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-10 py-4 text-[26px] font-display font-bold tracking-[0.2em] text-primary-foreground uppercase">
              <Sparkles className="w-7 h-7 inline mr-3 -mt-1" />
              Sobre Nós
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[110px] font-black leading-[0.9] text-primary-foreground mb-6"
          >
            Quem Somos Nós?
          </motion.h2>

          <motion.p
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[34px] text-primary-foreground/80 mb-6 max-w-[850px] leading-relaxed font-body"
          >
            A Assessoria Prime é uma assessoria de marketing especializada no crescimento de clínicas.
          </motion.p>

          <motion.p
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[36px] font-semibold text-primary-foreground mb-6 font-body"
          >
            Nosso objetivo é ajudar clínicas a:
          </motion.p>

          <div className="space-y-5 mb-8">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  whileHover={{ x: 10, scale: 1.03 }}
                  className="flex items-center gap-5 cursor-default group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:glow-gold transition-shadow flex-shrink-0"
                  >
                    <Icon className="w-8 h-8 text-background" />
                  </motion.div>
                  <span className="text-[36px] text-primary-foreground font-display font-bold">{item.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Quote highlight - darker bg for contrast */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl p-8 mt-2 cursor-default relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, hsl(0 0% 5%), hsl(0 0% 10%))", boxShadow: "0 0 40px hsl(45 100% 50% / 0.2)" }}
          >
            <p className="text-[30px] font-display font-black leading-relaxed relative z-10" style={{ color: "hsl(45 100% 50%)" }}>
              "Clínicas bem posicionadas no digital não precisam disputar preço. Elas se tornam referência."
            </p>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
