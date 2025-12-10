import { Button } from "@/components/ui/button";
import { Shield, Lock, XCircle } from "lucide-react";
import mockupDevices from "@/assets/mockup-devices.png";

const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden py-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6 py-0 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Pre-headline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold">
              <span className="text-primary text-lg">💎</span>
              <span className="text-sm font-medium text-foreground/90">
                Sistema de Inteligência Emocional com IA
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Domine Sua Mente com a{" "}
              <span className="text-gradient-gold">
                Precisão da Inteligência Artificial
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Não é terapia tradicional. É um <strong className="text-foreground">ecossistema de evolução pessoal</strong>{" "}
              que identifica padrões invisíveis, quebra sabotadores internos e coloca
              a sabedoria dos maiores mentores ao seu alcance — disponível 24 horas
              por dia, 7 dias por semana.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>100% Privado & Criptografado</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Sem Julgamentos</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-primary" />
                <span>Cancele Quando Quiser</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-2">
              <Button className="btn-gold text-lg h-16 px-10 rounded-xl">
                Quero Meu Mentor Agora →
              </Button>
            </div>
          </div>
          
          {/* Mockup Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              <img
                src={mockupDevices}
                alt="Fator Essencial - Dashboard e Mentor AI"
                className="relative z-10 w-full max-w-lg lg:max-w-xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
