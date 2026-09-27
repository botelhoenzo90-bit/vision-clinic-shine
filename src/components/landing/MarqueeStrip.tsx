const items = [
  "✦ MAIS PREVISIBILIDADE",
  "✦ AGENDA SEMPRE LOTADA",
  "✦ PACIENTES QUALIFICADOS",
  "✦ REFERÊNCIA NO MERCADO",
  "✦ MENOS DOR DE CABEÇA",
  "✦ CRESCIMENTO ESCALÁVEL",
  "✦ AUTORIDADE NO DIGITAL",
  "✦ MAIS FATURAMENTO",
  "✦ EQUIPE DEDICADA",
  "✦ RESULTADOS REAIS",
];

export default function MarqueeStrip() {
  return (
    <div className="bg-gradient-gold py-3 sm:py-4 overflow-hidden relative z-20">
      <div className="marquee-track flex whitespace-nowrap gap-8 sm:gap-12">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="font-display font-black text-sm sm:text-base lg:text-lg text-background tracking-wider shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
