import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  { name: "Dr. Ricardo Silva", clinic: "Clínica Derma Life", text: "Em apenas 3 meses, triplicamos o número de pacientes novos. A equipe da Assessoria Prime é extremamente competente e dedicada.", stars: 5, img: testimonial1 },
  { name: "Dra. Ana Beatriz", clinic: "OdontoSmile", text: "Finalmente parei de depender de indicações. Agora tenho um fluxo constante de pacientes qualificados. Recomendo demais!", stars: 5, img: testimonial2 },
  { name: "Dr. Carlos Eduardo", clinic: "Clínica Estética Premium", text: "Consegui aumentar meus preços em 40% e mesmo assim os pacientes continuam chegando. A autoridade digital faz toda a diferença.", stars: 5, img: testimonial3 },
  { name: "Dra. Fernanda Lima", clinic: "Centro Médico Saúde+", text: "A otimização diária dos anúncios fez nosso custo por lead cair pela metade. Investimento que se paga sozinho!", stars: 5, img: testimonial4 },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 3%), hsl(0 0% 5%), hsl(0 0% 3%))" }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        {/* Subtle floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{ left: `${5 + i * 12}%`, top: `${10 + (i % 4) * 20}%` }}
            animate={{ y: [0, -25, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            O que dizem nossos <span className="text-gradient-gold">clientes</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.03, boxShadow: "0 25px 50px hsl(45 100% 50% / 0.12)" }}
              className="bg-card/60 backdrop-blur border border-border/30 hover:border-primary/40 rounded-xl sm:rounded-2xl p-5 sm:p-7 cursor-default transition-all duration-300 relative overflow-hidden group"
            >
              {/* Shimmer overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
              />
              
              <Quote className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 text-primary/10 group-hover:text-primary/25 transition-all duration-300 group-hover:scale-110" />

              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(t.stars)].map((_, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.15 + si * 0.08, type: "spring" }}
                  >
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary" />
                  </motion.div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-foreground/90 font-body leading-relaxed mb-4 sm:mb-5 relative z-10">"{t.text}"</p>

              <div className="flex items-center gap-3 relative z-10">
                <motion.img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/30"
                  whileHover={{ scale: 1.15, borderColor: "hsl(45 100% 50%)" }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <p className="font-display font-bold text-sm sm:text-base text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{t.clinic}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
