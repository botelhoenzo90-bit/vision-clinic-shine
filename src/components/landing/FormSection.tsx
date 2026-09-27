import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, ArrowRight, Clock, Shield, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5542988380302";

const SEGMENTOS = [
  "Odontologia", "Dermatologia", "Cirurgia Plástica", "Oftalmologia",
  "Ortopedia", "Medicina Estética", "Clínica Geral", "Psicologia / Psiquiatria",
  "Nutrição", "Fisioterapia", "Outro",
];

const FATURAMENTOS = [
  "Até R$ 20.000/mês", "R$ 20.000 - R$ 50.000/mês",
  "R$ 50.000 - R$ 100.000/mês", "R$ 100.000 - R$ 300.000/mês",
  "Acima de R$ 300.000/mês",
];

export default function FormSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ nome: "", clinica: "", whatsapp: "", email: "", segmento: "", faturamento: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim() || !form.email.trim()) return;
    setSending(true);

    try {
      const response = await fetch(
        "https://nklxtmjzuhrxdnlhrxvz.supabase.co/functions/v1/capture-lead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.nome, email: form.email, phone: form.whatsapp, company: form.clinica,
            source: "pagina-vendas", segment: form.segmento || "Não informado",
            revenue: form.faturamento || "Não informado",
            notes: `Segmento: ${form.segmento || "Não informado"}, Faturamento: ${form.faturamento || "Não informado"}`,
            submitted_at: new Date().toISOString(),
          }),
        }
      );
      if (!response.ok) throw new Error("Erro ao enviar dados");
      setSent(true);
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      const msg = encodeURIComponent(
        `🏥 *Novo Lead - Assessoria Prime*\n\n👤 Nome: ${form.nome}\n🏢 Clínica: ${form.clinica}\n📱 WhatsApp: ${form.whatsapp}\n📧 Email: ${form.email}\n🏷️ Segmento: ${form.segmento}\n💰 Faturamento: ${form.faturamento}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full bg-secondary/80 border border-border/50 rounded-xl px-4 py-3.5 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 font-body focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_20px_hsl(45_100%_50%/0.1)] transition-all duration-300";

  return (
    <section id="form-section" ref={ref} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(0 0% 3%), hsl(0 0% 5%))" }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(45_100%_50%/0.04),transparent_60%)]" />
        {/* Animated corner accents */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32"
          style={{ background: "radial-gradient(circle at top right, hsl(45 100% 50% / 0.08), transparent 70%)" }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32"
          style={{ background: "radial-gradient(circle at bottom left, hsl(45 100% 50% / 0.08), transparent 70%)" }}
          animate={{ opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
            Preencha o formulário e <span className="text-gradient-gold">em breve nosso time</span> irá entrar em contato
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-xl mx-auto">
            Deixe seus dados abaixo e um especialista da Assessoria Prime irá falar com você em até 5 minutos no horário comercial.
          </p>
        </motion.div>

        {/* Form card with animated border */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl p-[1px] overflow-hidden"
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ background: "linear-gradient(135deg, hsl(45 100% 50% / 0.3), transparent 40%, transparent 60%, hsl(45 100% 50% / 0.3))" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-6 sm:p-10">
            {sent ? (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center py-12"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
                  animate={{ boxShadow: ["0 0 0px hsl(45 100% 50% / 0)", "0 0 40px hsl(45 100% 50% / 0.4)", "0 0 0px hsl(45 100% 50% / 0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </motion.div>
                </motion.div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">Mensagem enviada!</h4>
                <p className="text-sm text-muted-foreground font-body">Em breve entraremos em contato.</p>
                <button onClick={() => { setSent(false); setForm({ nome: "", clinica: "", whatsapp: "", email: "", segmento: "", faturamento: "" }); }} className="mt-4 text-primary underline text-sm font-body">Enviar outro</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { type: "text", placeholder: "Seu nome completo *", key: "nome", required: true, delay: 0.3 },
                    { type: "text", placeholder: "Nome da clínica", key: "clinica", required: false, delay: 0.35 },
                  ].map((field) => (
                    <motion.div key={field.key} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: field.delay }}>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                        maxLength={100}
                        className={inputClass}
                        required={field.required}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { type: "email", placeholder: "Seu melhor e-mail *", key: "email", delay: 0.4 },
                    { type: "tel", placeholder: "WhatsApp *", key: "whatsapp", delay: 0.45, maxLength: 20 },
                  ].map((field) => (
                    <motion.div key={field.key} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: field.delay }}>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                        maxLength={field.maxLength || 100}
                        className={inputClass}
                        required
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-display font-semibold text-foreground/80 mb-1.5 block">Segmento</label>
                    <select value={form.segmento} onChange={e => setForm(f => ({ ...f, segmento: e.target.value }))} className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="" className="bg-card text-muted-foreground">Selecionar</option>
                      {SEGMENTOS.map(s => <option key={s} value={s} className="bg-card">{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-display font-semibold text-foreground/80 mb-1.5 block">Faturamento</label>
                    <select value={form.faturamento} onChange={e => setForm(f => ({ ...f, faturamento: e.target.value }))} className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="" className="bg-card text-muted-foreground">Selecionar</option>
                      {FATURAMENTOS.map(f => <option key={f} value={f} className="bg-card">{f}</option>)}
                    </select>
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(45 100% 50% / 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-gold text-background font-display font-bold text-base sm:text-lg py-4 rounded-xl flex items-center justify-center gap-3 glow-gold hover:opacity-90 transition-all disabled:opacity-50 mt-2 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <Send className="w-5 h-5" />
                    Quero ser contactado
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-center gap-6 pt-2"
                >
                  <span className="flex items-center gap-2 text-xs text-muted-foreground font-body">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Retorno em até 5 min
                  </span>
                  <span className="flex items-center gap-2 text-xs text-muted-foreground font-body">
                    <Shield className="w-3.5 h-3.5 text-primary" />
                    Dados 100% seguros
                  </span>
                </motion.div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
