import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import logoAP from "@/assets/logo-ap.png";

const itemExit = { opacity: 0, y: -40, transition: { duration: 0.4 } };

export default function SlideCover() {
  return (
    <SlideLayout className="bg-[hsl(0,0%,3%)] overflow-hidden">
      {/* Background ghost text - very subtle */}
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 0.015, x: 0 }}
          exit={itemExit}
          transition={{ duration: 1.5 }}
          className="absolute left-[-60px] top-[50px] font-display text-[300px] font-black leading-none text-foreground"
          style={{ writingMode: "vertical-lr" }}
        >
          PRIME
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 0.015, x: 0 }}
          exit={itemExit}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute right-[-30px] top-[20px] font-display text-[300px] font-black leading-none text-foreground"
          style={{ writingMode: "vertical-lr" }}
        >
          PRIME
        </motion.div>
      </div>


      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
        {/* Logo centered at top */}
        <motion.img
          src={logoAP}
          alt="Assessoria Prime"
          initial={{ opacity: 0, scale: 0.5, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -30, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-[320px] h-[320px] object-contain mb-10"
        />

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, x: -80, transition: { duration: 0.4 } }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-[240px] font-black leading-[0.85] tracking-tight text-foreground text-center"
        >
          Assessoria
        </motion.h1>

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, x: 80, transition: { duration: 0.4, delay: 0.1 } }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-[260px] font-black leading-[0.85] tracking-tight text-primary text-center"
        >
          Prime
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-12 text-[48px] font-body tracking-[0.15em] text-muted-foreground text-center"
        >
          Marketing Especializado para Clínicas
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 500 }}
          exit={{ width: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="h-[6px] bg-primary rounded-full mt-8"
        />
      </div>
    </SlideLayout>
  );
}
