import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imgPlanejamento from "@/assets/service-planejamento.png";
import imgTrafego from "@/assets/service-trafego.png";
import imgCriativos from "@/assets/service-criativos.png";
import imgWhatsapp from "@/assets/service-whatsapp.png";
import imgPaginas from "@/assets/service-paginas.png";
import imgOtimizacoes from "@/assets/service-otimizacoes.png";
import imgCRM from "@/assets/service-crm.png";

const services = [
  { img: imgPlanejamento, alt: "Planejamento Estratégico" },
  { img: imgTrafego, alt: "Tráfego Pago para Clínicas" },
  { img: imgCriativos, alt: "Criativos, Imagens e Vídeos" },
  { img: imgWhatsapp, alt: "Scripts de Vendas no WhatsApp" },
  { img: imgPaginas, alt: "Criação de Páginas de Vendas" },
  { img: imgOtimizacoes, alt: "Otimizações" },
  { img: imgCRM, alt: "CRM para Clínicas" },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c <= 0 ? services.length - 1 : c - 1));
  const next = () => setCurrent(c => (c >= services.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 5%), hsl(0 0% 3%))" }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
            Nossas <span className="text-gradient-gold">Soluções</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-body max-w-xl mx-auto">
            Estratégias completas para posicionar sua clínica como referência e atrair pacientes de forma previsível
          </p>
        </motion.div>

        {/* Single card carousel */}
        <div className="relative flex flex-col items-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden border border-border/20"
            >
              <img
                src={services[current].img}
                alt={services[current].alt}
                className="w-full h-auto block"
              />
            </motion.div>
          </div>

          {/* Arrows */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button onClick={prev} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border/50 bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:border-primary/50 hover:text-primary transition-all">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {services.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-border/50 w-2.5"}`} />
              ))}
            </div>

            <button onClick={next} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border/50 bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:border-primary/50 hover:text-primary transition-all">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
