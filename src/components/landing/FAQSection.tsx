import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para ver os primeiros resultados?",
    a: "Em geral, os primeiros leads começam a chegar na primeira semana após o lançamento das campanhas. Resultados consistentes surgem entre 30 e 60 dias, conforme otimizamos as campanhas.",
  },
  {
    q: "Preciso ter redes sociais para começar?",
    a: "Não necessariamente! Podemos criar e configurar tudo do zero para sua clínica, incluindo perfis, páginas e contas de anúncio.",
  },
  {
    q: "Qual o investimento mínimo em anúncios?",
    a: "Recomendamos um investimento mínimo de R$ 40 a R$ 45 por dia (cerca de R$ 1.200/mês), dividido entre Meta Ads e Google Ads conforme a estratégia.",
  },
  {
    q: "Vocês fazem contrato de fidelidade?",
    a: "Oferecemos planos trimestrais, semestrais e anuais. Quanto maior o período, menor o valor mensal. Todos podem ser parcelados no cartão.",
  },
  {
    q: "Como funciona o acompanhamento?",
    a: "Você recebe relatórios mensais detalhados, além de ter acesso direto ao nosso time via WhatsApp para acompanhar os resultados em tempo real.",
  },
  {
    q: "E se eu não tiver experiência com marketing digital?",
    a: "Sem problema! Nós cuidamos de tudo. Desde a estratégia até a execução. Você só precisa atender os pacientes que vamos enviar.",
  },
];

function FAQItem({ faq, index, inView }: { faq: typeof faqs[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-card/60 backdrop-blur border border-border/30 hover:border-primary/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all group"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">{faq.q}</h3>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </motion.div>
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed mt-3 sm:mt-4 border-t border-border/20 pt-3 sm:pt-4">
            {faq.a}
          </p>
        </motion.div>
      </button>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 3%), hsl(0 0% 5%))" }}>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary font-display font-semibold text-xs sm:text-sm uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
