import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import logoAP from "@/assets/logo-ap-nobg.png";

const WHATSAPP_NUMBER = "5542988380302";
const INSTAGRAM_URL = "https://www.instagram.com/assessoriaprimebr/";

const quickLinks = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative pt-16 pb-8 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 4%), hsl(0 0% 2%))" }}>
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-gold"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Col 1 - Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <motion.img
              src={logoAP}
              alt="Assessoria Prime"
              className="w-16 h-16 object-contain mb-4"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
              Transformamos a presença digital de clínicas médicas com estratégia, performance e resultados reais.
            </p>
          </motion.div>

          {/* Col 2 - Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.06 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 font-body inline-block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 - Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors font-body group"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  (42) 98838-0302
                </a>
              </li>
              <li>
                <a
                  href="mailto:assessoriaprime.oficial@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors font-body group"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  assessoriaprime.oficial@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Col 4 - Redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">
              Redes Sociais
            </h4>
            <div className="flex items-center gap-3 mb-6">
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Separador + rodapé inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-muted-foreground/60 font-body text-center">
            <span>© {new Date().getFullYear()} Assessoria Prime. Todos os direitos reservados.</span>
            <span className="hidden sm:inline">•</span>
            <span>CNPJ: em breve</span>
          </div>
          <a
            href="/politica-de-privacidade"
            className="text-xs text-muted-foreground/60 hover:text-primary transition-colors font-body flex items-center gap-1"
          >
            Política de Privacidade
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
