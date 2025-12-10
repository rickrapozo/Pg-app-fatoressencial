import { RefreshCw, DollarSign, Theater } from "lucide-react";

const painPoints = [
  {
    icon: RefreshCw,
    title: "Rodando em Círculos",
    description: "Ansiedade, procrastinação e falta de clareza que não se resolvem apenas com \"força de vontade\". Você já tentou de tudo."
  },
  {
    icon: DollarSign,
    title: "Terapia Inacessível",
    description: "R$ 200-300 por sessão. Semanas de espera. Horários rígidos. E se você pudesse ter suporte quando realmente precisa?"
  },
  {
    icon: Theater,
    title: "Medo de Julgamento",
    description: "Você merece um espaço seguro para ser vulnerável, sem vergonha, sem olhares. Só você e sua evolução."
  }
];

const PainSection = () => {
  return (
    <section className="relative mb-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Você Já Se Sentiu <span className="text-gradient-gold">Assim?</span>
          </h2>
          
          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="glass-card p-8 space-y-4 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Amplification Text */}
          <div className="glass-card-gold p-8 md:p-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              <strong className="text-primary">Cada dia sem clareza mental é um dia perdido.</strong>
              <br /><br />
              Enquanto você adia, seus relacionamentos sofrem. 
              Sua carreira patina. Seu potencial fica aprisionado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
