import { useEffect, useState, useRef } from "react";
import mockupDashboard from "@/assets/mockup-dashboard.png";

const stats = [
  { target: 120, suffix: "h", label: "de Mentoria Acumulada" },
  { target: 89, suffix: "%", label: "de Clareza Mental" },
  { target: 78, suffix: "", label: "Dias de Consistência" }
];

const useCountUp = (target: number, duration = 2000, shouldStart: boolean) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, shouldStart]);
  
  return count;
};

const StatCounter = ({ target, suffix, label, shouldStart }: { 
  target: number; 
  suffix: string; 
  label: string;
  shouldStart: boolean;
}) => {
  const count = useCountUp(target, 2000, shouldStart);
  
  return (
    <div className="text-center">
      <span className="text-4xl lg:text-5xl font-bold text-gradient-gold">
        +{count}{suffix}
      </span>
      <p className="text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const GamificationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="relative mb-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Acompanhe Sua{" "}
              <span className="text-gradient-gold">Frequência Vibracional</span>
            </h2>
            
            <blockquote className="glass-card-gold p-6 border-l-4 border-primary">
              <p className="text-lg italic text-foreground/90">
                "O que não é medido, não é gerenciado."
              </p>
              <footer className="text-muted-foreground mt-2">— Peter Drucker</footer>
            </blockquote>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Fator Essencial transforma sua jornada emocional em métricas 
              claras. Visualize cada vitória, identifique padrões e{" "}
              <strong className="text-foreground">celebre sua evolução diária</strong>.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((stat, index) => (
                <StatCounter
                  key={index}
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                  shouldStart={isVisible}
                />
              ))}
            </div>
          </div>
          
          {/* Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-pulse-slow" />
              <img
                src={mockupDashboard}
                alt="Dashboard de Evolução"
                className="relative z-10 w-full max-w-sm lg:max-w-md drop-shadow-2xl"
              />
              {/* Floating particles */}
              <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full animate-float" />
              <div className="absolute bottom-20 left-5 w-2 h-2 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/3 -left-5 w-4 h-4 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
