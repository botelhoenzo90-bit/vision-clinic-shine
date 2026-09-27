import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { X } from "lucide-react";
import doctorImg from "@/assets/doctor-problems.png";

export default function SlideProblems() {
  const problems = [
    "Falta de pacientes novos",
    "Dependência de indicação",
    "Agenda com horários vagos",
    "Concorrentes aparecendo mais na internet",
    "Dificuldade em cobrar mais caro",
  ];

  return (
    <SlideLayout className="overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(40 30% 95%), hsl(45 20% 92%), hsl(50 15% 90%))" }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, hsl(45 100% 50% / 0.03) 12%, transparent 12.5%, transparent 87%, hsl(45 100% 50% / 0.03) 87.5%), linear-gradient(150deg, hsl(45 100% 50% / 0.03) 12%, transparent 12.5%, transparent 87%, hsl(45 100% 50% / 0.03) 87.5%)`,
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 40px 70px"
        }} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.06),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.04),transparent_70%)]" />
      </div>

      <div className="relative z-10 flex h-full">
        {/* Left - Doctor image bigger */}
        <div className="w-[620px] relative flex items-end justify-start">
          <motion.img
            src={doctorImg}
            alt="Médica preocupada"
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -60, transition: { duration: 0.4 } }}
            transition={{ duration: 1, type: "spring" }}
            className="absolute bottom-0 left-[0px] h-[1500px] w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Right - content, pushed more to the right */}
        <div className="flex-1 flex flex-col justify-center pr-10 pl-24">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[86px] font-black leading-[0.95] text-[hsl(0,0%,10%)] mb-6"
          >
            O problema das clínicas hoje
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[34px] text-[hsl(0,0%,30%)] mb-10 font-body"
          >
            A maioria das clínicas <span className="text-destructive font-bold">enfrenta problemas</span> como:
          </motion.p>

          <div className="space-y-7 mb-10">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0, x: 60, transition: { duration: 0.3, delay: i * 0.05 } }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                whileHover={{ x: 10, scale: 1.03 }}
                className="flex items-center gap-5 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-full bg-destructive/15 flex items-center justify-center flex-shrink-0"
                >
                  <X className="w-8 h-8 text-destructive" strokeWidth={3} />
                </motion.div>
                <span className="text-[36px] text-[hsl(0,0%,12%)] font-display font-bold group-hover:text-[hsl(0,0%,0%)] transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Quote - gold bg only behind text, inline */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.03 }}
            className="cursor-default"
          >
            <span
              className="font-display font-black text-[34px] text-[hsl(0,0%,5%)] italic px-6 py-3 rounded-xl inline"
              style={{
                background: "linear-gradient(135deg, hsl(40 100% 50%), hsl(45 100% 55%))",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
              }}
            >
              "Quem não é visto não é lembrado"
            </span>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
