import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { DollarSign, TrendingUp, BarChart3, Target } from "lucide-react";

export default function SlideBudget() {
  return (
    <SlideLayout className="overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-gold" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-gold" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(45 100% 50% / 0.04) 1px, transparent 0)`,
          backgroundSize: "50px 50px"
        }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.06),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex flex-col h-full px-20 py-14">
        {/* Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[84px] font-black leading-none text-foreground mb-3">
            Orçamento de <span className="text-gradient-gold">Tráfego</span>
          </h2>
          <p className="text-[26px] text-muted-foreground font-body">
            Investimento estratégico para resultados reais
          </p>
        </motion.div>

        <div className="flex-1 flex gap-12 items-center justify-center">
          {/* Left - Strategy cards */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -60, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col gap-6"
          >
            {[
              { icon: Target, title: "Estratégia Multi-Funil", desc: "Usaremos múltiplos funis de consciência em ambas plataformas de tráfego (Google Ads e Meta Ads)." },
              { icon: BarChart3, title: "Google Ads", desc: "Para públicos mais conscientes nas redes de pesquisa (Google Search)." },
              { icon: TrendingUp, title: "Meta Ads", desc: "Para topo de funil e sem base de públicos, com intuito de descobrir e qualificar possíveis compradores." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.3, delay: i * 0.05 } }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  whileHover={{ scale: 1.02, x: 6 }}
                  className="bg-secondary rounded-2xl px-8 py-7 flex items-start gap-6 border border-border/30 hover:border-primary/40 transition-all cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                  <div>
                    <h4 className="font-display text-[28px] font-black text-foreground mb-1">{item.title}</h4>
                    <p className="text-[20px] text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right - Pricing highlight */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: 60, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[600px] flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-secondary rounded-3xl px-14 py-12 text-center border-2 border-primary/30 relative overflow-hidden w-full"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6 glow-gold"
              >
                <DollarSign className="w-10 h-10 text-background" />
              </motion.div>

              <p className="text-[22px] text-muted-foreground font-body mb-2">Investimento Diário</p>
              <div className="font-display text-[72px] font-black text-primary leading-none mb-2">
                R$ 40 à 45 <span className="text-[30px] text-muted-foreground">por dia</span>
              </div>

              <div className="w-full h-px bg-primary/20 my-8" />

              <p className="text-[20px] text-muted-foreground font-body mb-2">Investimento Mensal em Média</p>
              <div className="font-display text-[56px] font-black text-foreground leading-none">
                R$ 1.200
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-[18px] text-muted-foreground font-body mt-6 leading-relaxed max-w-[450px] mx-auto"
              >
                Pode ser dividido entre as plataformas conforme a estratégia planejada
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gold bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0, transition: { duration: 0.3 } }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-3 bg-gradient-gold rounded-full mt-6 origin-left"
        />
      </div>
    </SlideLayout>
  );
}
