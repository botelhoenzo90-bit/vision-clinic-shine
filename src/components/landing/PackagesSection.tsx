import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Básico",
    tagline: "Ideal para começar",
    featured: false,
    price: "R$ 1.750",
    features: [
      "Planejamento estratégico",
      "Gestão Meta Ads",
      "3 a 5 criativos por mês",
      "Copywriting profissional",
      "Otimização diária",
      "Relatório mensal",
    ],
  },
  {
    name: "Premium",
    tagline: "Resultado máximo",
    featured: true,
    price: "R$ 2.250",
    features: [
      "Planejamento estratégico",
      "Meta Ads + Google Ads",
      "5 a 7 criativos por mês",
      "Copywriting profissional",
      "Otimização diária",
      "Relatório mensal",
    ],
  },
];

export default function PackagesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 5%), hsl(0 0% 3%))" }}>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(45 100% 50% / 0.03) 1px, transparent 0)`,
        backgroundSize: "50px 50px"
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            Nossos <span className="text-gradient-gold">Pacotes</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-body mt-3">Investimento a partir de R$ 1.200/mês em anúncios</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="relative bg-card rounded-2xl sm:rounded-3xl border-2 border-primary/20 hover:border-primary/50 transition-all overflow-hidden group"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-[radial-gradient(ellipse,hsl(45_100%_50%/0.08),transparent_70%)] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {pkg.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-px left-0 right-0 flex justify-center"
                >
                  <div className="bg-gradient-gold rounded-b-xl px-4 sm:px-6 py-1.5 sm:py-2 flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-background fill-background" />
                    <span className="text-xs sm:text-sm font-display font-bold text-background">MAIS VENDIDO</span>
                  </div>
                </motion.div>
              )}

              <div className="relative z-10 p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-foreground">{pkg.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">{pkg.tagline}</p>
                  <div className="mt-4">
                    <span className="text-xs text-muted-foreground">a partir de</span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display text-3xl sm:text-4xl font-black text-gradient-gold">{pkg.price}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">/mês</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" strokeWidth={3} />
                      <span className="text-xs sm:text-sm text-foreground/90 font-body">{f}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToForm}
                  className="w-full bg-gradient-gold text-background font-display font-bold text-sm sm:text-base py-3 sm:py-4 rounded-xl glow-gold hover:opacity-90 transition-all"
                >
                  QUERO ESTE PLANO
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
