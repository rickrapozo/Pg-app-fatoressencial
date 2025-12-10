import { Button } from "@/components/ui/button";
import { Check, Shield, Sparkles } from "lucide-react";

const benefits = [
  "Mentor AI com conversas ilimitadas",
  "Diário Analítico com criptografia",
  "Arsenal Mental completo (audiobooks + curadoria)",
  "Dashboard de evolução em tempo real",
  "Suporte 24/7 via chat",
  "Atualizações constantes com novos conteúdos"
];

const PricingSection = () => {
  return (
    <section className="relative mb-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-xl mx-auto">
          {/* Pricing Card */}
          <div className="glass-card-gold p-8 md:p-12 space-y-8 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 blur-3xl rounded-full" />
            
            {/* Header */}
            <div className="text-center space-y-4 relative">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Oferta de Lançamento
              </span>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Acesso Total ao Ecossistema
              </h2>
            </div>
            
            {/* Price */}
            <div className="text-center space-y-2 relative">
              <p className="text-muted-foreground line-through text-lg">
                De R$ 97,00/mês
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl text-foreground">R$</span>
                <span className="text-6xl md:text-7xl font-bold text-gradient-gold">29,90</span>
                <span className="text-xl text-muted-foreground">/mês</span>
              </div>
              <p className="text-muted-foreground">
                Menos que 1 sessão de terapia por mês.<br />
                <strong className="text-foreground">Acesso ilimitado 24/7.</strong>
              </p>
            </div>
            
            {/* Benefits */}
            <ul className="space-y-4 relative">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            
            {/* Guarantee */}
            <div className="glass-card p-6 flex items-start gap-4 relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  Garantia Risco Zero - 7 Dias
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Experimente sem compromisso. Não gostou? 
                  Cancele com 1 clique.
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="space-y-4 relative">
              <Button className="btn-gold w-full text-base md:text-lg h-14 md:h-16 rounded-xl animate-glow leading-tight whitespace-normal md:whitespace-nowrap px-4">
                Quero Começar Minha Transformação Agora →
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                ⚡ Vagas limitadas para garantir qualidade do serviço
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
