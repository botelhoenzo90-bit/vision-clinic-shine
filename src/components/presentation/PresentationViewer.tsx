import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pen, Eraser, Highlighter, X, PenTool } from "lucide-react";
import ScaledSlide from "./ScaledSlide";
import SlideCover from "./SlideCover";
import SlideAbout from "./SlideAbout";
import SlideProblems from "./SlideProblems";
import SlideStrategyMethodology from "./SlideStrategyMethodology";
import SlideBudget from "./SlideBudget";
import SlidePackages from "./SlidePackages";
import SlideProcess from "./SlideProcess";
import SlideCTA from "./SlideCTA";

const slides = [
  { id: 1, component: SlideCover, label: "Capa" },
  { id: 2, component: SlideAbout, label: "Quem Somos" },
  { id: 3, component: SlideProblems, label: "Problemas" },
  { id: 4, component: SlideStrategyMethodology, label: "Estratégia" },
  { id: 5, component: SlideBudget, label: "Orçamento" },
  { id: 6, component: SlidePackages, label: "Pacotes" },
  { id: 7, component: SlideProcess, label: "Processos" },
  { id: 8, component: SlideCTA, label: "CTA" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
};

type DrawTool = "pen" | "highlighter" | "eraser" | null;

const penColors = ["#FFD700", "#FF4444", "#44FF44", "#4488FF", "#FFFFFF"];

export default function PresentationViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [drawTool, setDrawTool] = useState<DrawTool>(null);
  const [penColor, setPenColor] = useState("#FFD700");
  const [showDrawMenu, setShowDrawMenu] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const drawingsRef = useRef<Record<number, string>>({});

  const saveCurrentCanvas = useCallback(() => {
    if (canvasRef.current) {
      drawingsRef.current[currentSlide] = canvasRef.current.toDataURL();
    }
  }, [currentSlide]);

  const loadCanvas = useCallback((slideIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const saved = drawingsRef.current[slideIndex];
    if (saved) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0);
      img.src = saved;
    }
  }, []);

  const goTo = useCallback((index: number) => {
    saveCurrentCanvas();
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide, saveCurrentCanvas]);

  const next = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      saveCurrentCanvas();
      setDirection(1);
      setCurrentSlide(c => c + 1);
    }
  }, [currentSlide, saveCurrentCanvas]);

  const prev = useCallback(() => {
    if (currentSlide > 0) {
      saveCurrentCanvas();
      setDirection(-1);
      setCurrentSlide(c => c - 1);
    }
  }, [currentSlide, saveCurrentCanvas]);

  const goToFirst = useCallback(() => {
    saveCurrentCanvas();
    setDirection(1);
    setCurrentSlide(0);
  }, [saveCurrentCanvas]);

  useEffect(() => {
    setTimeout(() => loadCanvas(currentSlide), 100);
  }, [currentSlide, loadCanvas]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape") { setDrawTool(null); setShowDrawMenu(false); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  useEffect(() => {
    const tryFullscreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    };
    const timer = setTimeout(tryFullscreen, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer: number;
    const show = () => {
      setShowControls(true);
      clearTimeout(timer);
      timer = window.setTimeout(() => setShowControls(false), 3000);
    };
    window.addEventListener("mousemove", show);
    show();
    return () => {
      window.removeEventListener("mousemove", show);
      clearTimeout(timer);
    };
  }, []);

  const getCanvasPoint = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawTool) return;
    isDrawingRef.current = true;
    lastPointRef.current = getCanvasPoint(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !drawTool) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    const point = getCanvasPoint(e);
    if (!point || !lastPointRef.current) return;

    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(point.x, point.y);

    if (drawTool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 30;
      ctx.strokeStyle = "rgba(0,0,0,1)";
    } else if (drawTool === "highlighter") {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 20;
      ctx.strokeStyle = penColor + "55";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 3;
      ctx.strokeStyle = penColor;
    }

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    lastPointRef.current = point;
  };

  const endDraw = () => {
    isDrawingRef.current = false;
    lastPointRef.current = null;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      delete drawingsRef.current[currentSlide];
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="fixed inset-0 bg-background flex flex-col" style={{ cursor: drawTool ? "crosshair" : "default" }}>
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}
            className="absolute inset-0"
          >
            <ScaledSlide>
              {currentSlide === slides.length - 1 ? (
                <SlideCTA onGoToFirst={goToFirst} />
              ) : (
                <CurrentSlideComponent />
              )}
            </ScaledSlide>
          </motion.div>
        </AnimatePresence>

        {/* Drawing canvas overlay */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full z-20"
          style={{ pointerEvents: drawTool ? "auto" : "none" }}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
        />

        {/* Navigation arrows */}
        <AnimatePresence>
          {showControls && !drawTool && (
            <>
              {currentSlide > 0 && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </motion.button>
              )}
              {currentSlide < slides.length - 1 && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </motion.button>
              )}
            </>
          )}
        </AnimatePresence>

        {/* Drawing tools - bottom left, small and discreet, opens to the right */}
        <div className="absolute bottom-3 left-3 z-40 flex items-end gap-2">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowDrawMenu(!showDrawMenu)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              showDrawMenu || drawTool ? "bg-primary/80 text-primary-foreground opacity-100" : "bg-background/40 backdrop-blur-sm border border-border/30"
            }`}
          >
            <PenTool className="w-4 h-4" />
          </motion.button>

          {/* Expandable draw menu - opens to the right */}
          <AnimatePresence>
            {showDrawMenu && (
              <motion.div
                initial={{ x: -20, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -20, opacity: 0, scale: 0.8 }}
                className="bg-background/80 backdrop-blur-xl rounded-full px-2 py-1.5 flex items-center gap-1 border border-border/30 shadow-lg"
              >
                <button
                  onClick={() => setDrawTool(drawTool === "pen" ? null : "pen")}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${drawTool === "pen" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                  title="Caneta"
                >
                  <Pen className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDrawTool(drawTool === "highlighter" ? null : "highlighter")}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${drawTool === "highlighter" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                  title="Destacar"
                >
                  <Highlighter className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDrawTool(drawTool === "eraser" ? null : "eraser")}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${drawTool === "eraser" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                  title="Apagar"
                >
                  <Eraser className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-5 bg-border/50" />
                <div className="relative">
                  <button
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-secondary transition-all"
                    title="Cor"
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-foreground/30" style={{ backgroundColor: penColor }} />
                  </button>
                  {showColorPicker && (
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-xl rounded-xl p-2 flex gap-1.5 border border-border/50">
                      {penColors.map(c => (
                        <button
                          key={c}
                          onClick={() => { setPenColor(c); setShowColorPicker(false); }}
                          className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${penColor === c ? "border-foreground scale-110" : "border-transparent"}`}
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                {drawTool && (
                  <button
                    onClick={clearCanvas}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-destructive/20 text-destructive transition-all"
                    title="Limpar tudo"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
