import { Brain, BookOpen, Headphones, Check } from "lucide-react";
import mockupMentor from "@/assets/mockup-mentor.png";
import mockupDiario from "@/assets/mockup-diario.png";

const SolutionSection = () => {
  return (
    <section className="relative overflow-hidden mb-4">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold text-sm font-medium">
            ✨ O Ecossistema Completo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Três Pilares da <span className="text-gradient-gold">Transformação</span>
          </h2>
        </div>
        
        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Card 1: Mentor AI - Large */}
          <div className="lg:col-span-2 lg:row-span-2 glass-card-gold p-8 lg:p-10 space-y-6 group hover:border-primary/40 transition-all duration-500">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Brain className="w-4 h-4" />
              O Cérebro do Sistema
            </span>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Mentor Live AI: Sua Consciência Expandida
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              Um terapeuta de voz treinado para identificar seus pontos cegos 
              em tempo real. <strong className="text-foreground">Converse, desabafe e receba direcionamento 
              prático instantaneamente</strong> — como se tivesse um PhD em psicologia 
              no bolso.
            </p>
            
            {/* Mockup */}
            <div className="relative flex justify-center py-6">
              <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-75" />
              <img
                src={mockupMentor}
                alt="Mentor AI Interface"
                className="relative z-10 w-full max-w-xs lg:max-w-sm drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Features */}
            <ul className="space-y-3">
              {[
                "Análise emocional em tempo real",
                "Respostas contextualizadas ao seu momento",
                "Sem julgamento, apenas evolução"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Card 2: Diário Analítico */}
          <div className="glass-card p-8 space-y-5 group hover:border-primary/30 transition-all duration-500">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-primary text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              Sua Caixa-Preta Emocional
            </span>
            
            <h3 className="text-xl lg:text-2xl font-bold text-foreground">
              Diário de Bordo Analítico
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Esqueça o papel. Aqui, seus pensamentos são protegidos por 
              <strong className="text-foreground"> criptografia militar</strong> e analisados por IA para 
              gerar relatórios de evolução emocional.
            </p>
            
            {/* Mini Mockup */}
            <div className="relative flex justify-center py-4">
              <img
                src={mockupDiario}
                alt="Diário de Bordo"
                className="w-full max-w-[180px] drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <ul className="space-y-2 text-sm">
              {["Criptografia de ponta", "Insights automáticos"].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Card 3: Arsenal Mental */}
          <div className="glass-card p-8 space-y-5 group hover:border-primary/30 transition-all duration-500">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-primary text-sm font-medium">
              <Headphones className="w-4 h-4" />
              Biblioteca de Elite
            </span>
            
            <h3 className="text-xl lg:text-2xl font-bold text-foreground">
              Arsenal Mental
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Audiobooks, curadoria de conteúdo de mentores globais e 
              técnicas práticas para reprogramar crenças limitantes — 
              enquanto você treina, dirige ou relaxa.
            </p>
            
            {/* Audio Wave Icon */}
            <div className="flex justify-center py-6">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Headphones className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <ul className="space-y-2 text-sm">
              {[
                "Curadoria personalizada por IA",
                "Conteúdo de mestres como Tony Robbins"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
