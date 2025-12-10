import { Button } from "@/components/ui/button";
import { Lock, XCircle, MessageCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden mb-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-3xl rounded-full" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Message */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Sua Mente Merece um{" "}
              <span className="text-gradient-gold">Upgrade</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Cada grande transformação começa com uma decisão. 
              A sua pode começar hoje, agora, neste momento.
            </p>
            
            <p className="text-xl font-semibold text-foreground">
              Você tem duas escolhas:
            </p>
          </div>
          
          {/* Choice Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Bad Choice */}
            <div className="glass-card p-8 space-y-4 border-destructive/20 hover:border-destructive/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto">
                <span className="text-2xl">❌</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                Continuar como está
              </h3>
              <p className="text-muted-foreground">
                Mesma ansiedade, mesmos padrões, mesmos resultados.
              </p>
            </div>
            
            {/* Good Choice */}
            <div className="glass-card-gold p-8 space-y-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                Dar o primeiro passo
              </h3>
              <p className="text-muted-foreground">
                7 dias grátis. Sem riscos. Potencial ilimitado.
              </p>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="space-y-6 pt-4">
            <Button className="btn-gold text-lg h-16 px-12 rounded-xl animate-glow">
              Sim, Quero Evoluir Agora →
            </Button>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>Seus dados seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-primary" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
