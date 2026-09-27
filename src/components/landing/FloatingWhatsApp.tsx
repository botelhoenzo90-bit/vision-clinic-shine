import { motion } from "framer-motion";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const WHATSAPP_NUMBER = "5542988380302";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Assessoria Prime.")}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-lg" />
    </motion.a>
  );
}
