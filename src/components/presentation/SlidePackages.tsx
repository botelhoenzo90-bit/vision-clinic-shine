import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Check, Star, ArrowLeft, ShoppingBag, FileText, MessageSquare, GraduationCap, Layout, Database } from "lucide-react";
import logoAP from "@/assets/logo-ap.png";

interface PackageData {
  name: string;
  tagline: string;
  featured: boolean;
  features: string[];
  pricing: {
    trimestral: { mensal: string; total: string; parcelas: string };
    semestral: { mensal: string; total: string; parcelas: string };
    anual: { mensal: string; total: string; parcelas: string };
  };
}

const packages: PackageData[] = [
  {
    name: "Básico",
    tagline: "Ideal para começar",
    featured: false,
    features: [
      "Planejamento estratégico",
      "Gestão Meta Ads",
      "3 a 5 criativos por mês",
      "Copywriting profissional",
      "Otimização diária",
      "Relatório mensal",
    ],
    pricing: {
      trimestral: { mensal: "R$ 2.000", total: "R$ 6.000", parcelas: "Em até 6x no cartão" },
      semestral: { mensal: "R$ 1.850", total: "R$ 11.100", parcelas: "Em até 12x no cartão" },
      anual: { mensal: "R$ 1.750", total: "R$ 21.000", parcelas: "Em até 12x no cartão" },
    },
  },
  {
    name: "Premium",
    tagline: "Resultado máximo",
    featured: true,
    features: [
      "Planejamento estratégico",
      "Meta Ads + Google Ads",
      "5 a 7 criativos por mês",
      "Copywriting profissional",
      "Otimização diária",
      "Relatório mensal",
    ],
    pricing: {
      trimestral: { mensal: "R$ 2.500", total: "R$ 7.500", parcelas: "Em até 6x no cartão" },
      semestral: { mensal: "R$ 2.350", total: "R$ 14.100", parcelas: "Em até 12x no cartão" },
      anual: { mensal: "R$ 2.250", total: "R$ 27.000", parcelas: "Em até 12x no cartão" },
    },
  },
];

const additionalProducts = [
  { icon: Layout, name: "Página de Vendas", desc: "Landing page otimizada para conversão" },
  { icon: MessageSquare, name: "Script de WhatsApp", desc: "Roteiro profissional de atendimento" },
  { icon: GraduationCap, name: "Treinamento de Secretária", desc: "Capacitação para converter leads" },
  { icon: FileText, name: "Consultoria Estratégica", desc: "Sessões de acompanhamento" },
  { icon: Database, name: "CRM para Clínicas", desc: "Em Breve!" },
];

export default function SlidePackages() {
  const [selectedPkg, setSelectedPkg] = useState<number | null>(null);

  return (
    <SlideLayout className="bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(45 100% 50% / 0.03) 1px, transparent 0)`,
          backgroundSize: "50px 50px"
        }} />
      </div>

      <div className="relative z-10 flex flex-col h-full px-14 py-10">
        {/* Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-[80px] font-black text-foreground leading-none">
            Nossos <span className="text-gradient-gold">Pacotes</span>
          </h2>
          <p className="text-[24px] text-muted-foreground font-body mt-3">Clique em um pacote para ver os valores</p>
        </motion.div>

        {/* 3 cards */}
        <div className="flex-1 flex gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: 40, transition: { duration: 0.3, delay: i * 0.05 } }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              whileHover={{ y: -20, scale: 1.06 }}
              onClick={() => setSelectedPkg(i)}
              className="flex-1 rounded-2xl flex flex-col relative overflow-visible cursor-pointer group transition-all"
              style={{ background: "hsl(0 0% 8%)" }}
            >
              {/* Border glow */}
              <div
                className="absolute -inset-[2px] rounded-2xl pointer-events-none"
                style={{
                  border: "2px solid hsl(45 100% 50% / 0.5)",
                  boxShadow: "0 0 20px hsl(45 100% 50% / 0.08), inset 0 0 20px hsl(45 100% 50% / 0.04)",
                }}
              />

              {/* Glow behind card on hover */}
              <div className="absolute -inset-[16px] rounded-3xl pointer-events-none opacity-30 group-hover:opacity-70 transition-opacity duration-500" style={{
                background: "radial-gradient(ellipse, hsl(45 100% 50% / 0.2), transparent 70%)",
              }} />

              {/* Featured badge - centered on top border */}
              {pkg.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                  >
                    <div className="bg-gradient-gold rounded-full px-6 py-2.5 flex items-center gap-2 glow-gold">
                      <Star className="w-5 h-5 text-background fill-background" />
                      <span className="text-[18px] font-display font-bold text-background whitespace-nowrap">MAIS VENDIDO</span>
                    </div>
                  </motion.div>
                </div>
              )}

              <div className="p-10 text-center border-b border-border/20 relative z-10">
                <h3 className="font-display text-[48px] font-black text-foreground mb-2">{pkg.name}</h3>
                <p className="text-[22px] text-muted-foreground font-body">{pkg.tagline}</p>
                
                <div className="mt-6">
                  <span className="text-[20px] text-muted-foreground">a partir de</span>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-display text-[56px] font-black text-gradient-gold leading-tight">{pkg.pricing.anual.mensal}</span>
                    <span className="text-[22px] text-muted-foreground">/mês</span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 relative z-10">
                <div className="space-y-4">
                  {pkg.features.map((feature, fi) => (
                    <motion.div
                      key={fi}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + fi * 0.06 }}
                      className="flex items-start gap-4"
                    >
                      <Check className="w-7 h-7 text-primary mt-0.5 flex-shrink-0" strokeWidth={3} />
                      <span className="text-[28px] text-foreground/90 font-display font-semibold">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-gold text-background glow-gold font-display font-bold text-[24px] py-5 rounded-xl text-center transition-all cursor-pointer"
                >
                  VER PREÇOS
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Additional Products card */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: 40, transition: { duration: 0.3, delay: 0.1 } }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex-1 rounded-2xl flex flex-col relative overflow-visible"
            style={{ background: "hsl(0 0% 8%)" }}
          >
            <div className="absolute -inset-[2px] rounded-2xl pointer-events-none" style={{
              border: "2px solid hsl(45 100% 50% / 0.5)",
              boxShadow: "0 0 20px hsl(45 100% 50% / 0.08), inset 0 0 20px hsl(45 100% 50% / 0.04)",
            }} />

            <div className="absolute -inset-[16px] rounded-3xl pointer-events-none opacity-30" style={{
              background: "radial-gradient(ellipse, hsl(45 100% 50% / 0.12), transparent 70%)",
            }} />

            <div className="p-10 text-center border-b border-border/20 relative z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-background" />
              </div>
              <h3 className="font-display text-[44px] font-black text-foreground mb-2">Produtos Adicionais</h3>
              <p className="text-[20px] text-muted-foreground font-body">Potencialize seus resultados</p>
            </div>

            <div className="p-8 flex-1 relative z-10">
              <div className="space-y-5">
                {additionalProducts.map((product, pi) => {
                  const Icon = product.icon;
                  const isCRM = product.name === "CRM para Clínicas";
                  return (
                    <motion.div
                      key={pi}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + pi * 0.08 }}
                      whileHover={{ x: 6, scale: 1.02 }}
                      className="flex items-center gap-4 cursor-default group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-[26px] text-foreground font-display font-bold block leading-tight">{product.name}</span>
                        <span className={`text-[18px] font-body ${isCRM ? "text-primary font-bold" : "text-muted-foreground"}`}>{product.desc}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedPkg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, hsl(0 0% 4%), hsl(0 0% 8%), hsl(0 0% 4%))" }}
            onClick={() => setSelectedPkg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full flex flex-col items-center justify-center px-20 py-14 relative"
            >
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-gold" />
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-gold" />
                <div className="absolute top-[200px] left-[300px] w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.06),transparent_70%)]" />
                <div className="absolute bottom-[100px] right-[200px] w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.04),transparent_70%)]" />
              </div>

              <div className="absolute top-8 left-10 flex items-center gap-3 z-10">
                <div className="bg-[hsl(0,0%,0%)] rounded-lg p-1">
                  <img src={logoAP} alt="Logo" className="w-14 h-14 object-contain" />
                </div>
                <span className="font-display font-bold text-[22px] text-foreground">Assessoria Prime</span>
              </div>

              <button
                onClick={() => setSelectedPkg(null)}
                className="absolute top-8 right-10 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-display font-semibold text-[20px] z-10"
              >
                <ArrowLeft className="w-6 h-6" />
                Voltar
              </button>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-primary/10 border border-primary/30 rounded-full px-8 py-3 mb-6 relative z-10"
              >
                <span className="text-primary font-display font-semibold text-[22px]">● Encontre o plano ideal para sua clínica</span>
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="font-display text-[90px] font-black text-foreground mb-16 italic relative z-10"
              >
                Plano {packages[selectedPkg].name}
              </motion.h3>

              <div className="grid grid-cols-3 gap-8 w-full max-w-[1400px] relative z-10">
                {(["trimestral", "semestral", "anual"] as const).map((period, pi) => {
                  const data = packages[selectedPkg].pricing[period];
                  const labels = { trimestral: "Trimestral", semestral: "Semestral", anual: "Anual" };
                  return (
                    <motion.div
                      key={period}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + pi * 0.1 }}
                      whileHover={{ y: -12, scale: 1.04 }}
                      className="rounded-2xl p-10 border-2 transition-all cursor-default relative overflow-hidden group"
                      style={{
                        borderColor: period === "anual" ? "hsl(45 100% 50%)" : "hsl(0 0% 20%)",
                        background: "hsl(0 0% 10%)",
                      }}
                    >
                      {period === "anual" && (
                        <>
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-gold" />
                          <div className="absolute top-4 right-4 bg-gradient-gold rounded-full px-4 py-1.5">
                            <span className="text-[14px] font-display font-bold text-background">MELHOR VALOR</span>
                          </div>
                        </>
                      )}
                      <h4 className="font-display text-[32px] font-bold text-foreground mb-8">{labels[period]}</h4>
                      
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-[60px] font-black text-primary leading-none">{data.mensal}</span>
                        <span className="text-[22px] text-muted-foreground font-body">/mês</span>
                      </div>
                      
                      <div className="mt-6 text-[20px] text-muted-foreground font-body">
                        Valor total: {data.total}
                      </div>
                      <div className="mt-2 text-[20px] text-muted-foreground font-body">
                        {data.parcelas}
                      </div>
                      <div className="mt-4 text-primary font-display font-semibold text-[20px]">
                        + R$ 1.200,00 em anúncios
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideLayout>
  );
}
