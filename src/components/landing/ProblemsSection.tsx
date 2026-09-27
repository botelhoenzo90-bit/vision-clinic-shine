import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, AlertTriangle } from "lucide-react";

const problems = [
  { text: "Falta de pacientes novos", detail: "Sua clínica depende apenas de indicações e não tem fluxo constante de novos pacientes." },
  { text: "Dependência de indicação", detail: "Sem presença digital, você fica refém de indicações que são imprevisíveis." },
  { text: "Agenda com horários vagos", detail: "Horários ociosos significam perda de receita e equipe subutilizada." },
  { text: "Concorrentes aparecendo mais", detail: "Enquanto você espera, seus concorrentes investem em marketing e roubam seus pacientes." },
  { text: "Dificuldade em cobrar mais caro", detail: "Sem autoridade digital, é impossível justificar preços premium." },
];

export default function ProblemsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 3%), hsl(0 0% 6%), hsl(0 0% 3%))" }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        {/* Pulsing red glow */}
        <motion.div
          className="absolute top-1/3 right-0 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, hsl(0 84% 60% / 0.06), transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
          >
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <AlertTriangle className="w-4 h-4 text-destructive" />
            </motion.div>
            <span className="text-destructive font-display font-semibold text-xs sm:text-sm uppercase tracking-wider">Atenção</span>
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            Sua clínica sofre com
            <br />
            <motion.span
              className="text-destructive inline-block"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              esses problemas?
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5 max-w-3xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, rotateY: i % 2 === 0 ? -10 : 10 }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.03, x: 10, boxShadow: "0 10px 30px hsl(0 84% 60% / 0.1)" }}
              className="bg-card/60 backdrop-blur border border-destructive/10 hover:border-destructive/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-5 cursor-default transition-all group"
            >
              <motion.div
                whileHover={{ rotate: 180, scale: 1.3 }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-destructive/15 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/25 transition-all duration-300"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" strokeWidth={3} />
              </motion.div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-destructive transition-colors duration-300">{problem.text}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed">{problem.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, type: "spring" }}
          className="mt-10 sm:mt-14 text-center"
        >
          <motion.div
            className="inline-block bg-gradient-gold rounded-xl sm:rounded-2xl px-6 sm:px-10 py-3 sm:py-5 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
            />
            <p className="font-display font-black text-base sm:text-xl text-background relative z-10">
              "Quem não é visto não é lembrado"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
