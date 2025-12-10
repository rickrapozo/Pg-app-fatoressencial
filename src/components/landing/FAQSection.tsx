import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lock, Bot, CreditCard, Smartphone, Brain } from "lucide-react";

const faqs = [
  {
    icon: Lock,
    question: "Meus dados são realmente seguros?",
    answer: "Sim. Usamos criptografia de ponta a ponta (AES-256), a mesma utilizada por bancos. Seus pensamentos ficam apenas com você. Nem nós temos acesso ao conteúdo do seu diário."
  },
  {
    icon: Bot,
    question: "Como a IA funciona? Ela realmente entende?",
    answer: "O Mentor AI foi treinado com milhares de sessões terapêuticas, técnicas de CBT, PNL e neurociência. Ele identifica padrões emocionais, não apenas responde palavras. É como ter um terapeuta com memória perfeita."
  },
  {
    icon: CreditCard,
    question: "Posso cancelar quando quiser?",
    answer: "Claro! Sem burocracias, sem taxas. É só acessar \"Minha Conta\" e clicar em \"Cancelar Assinatura\". Simples assim."
  },
  {
    icon: Smartphone,
    question: "Funciona no meu celular?",
    answer: "Sim! O Fator Essencial é 100% mobile-first. Funciona em iPhone, Android e também no desktop."
  },
  {
    icon: Brain,
    question: "Isso substitui terapia tradicional?",
    answer: "O Fator Essencial complementa (e potencializa) terapia, mas não substitui tratamento clínico para condições graves. É ideal para desenvolvimento pessoal, clareza mental e suporte emocional diário."
  }
];

const FAQSection = () => {
  return (
    <section className="relative mb-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Perguntas <span className="text-gradient-gold">Frequentes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tudo que você precisa saber antes de começar sua transformação.
            </p>
          </div>
          
          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-14 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
