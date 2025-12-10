import { PlayCircle } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    url: "https://www.youtube.com/embed/zVUCn5RXn0U",
  },
  {
    name: "Felipe Martins",
    url: "https://www.youtube.com/embed/0okAiLPP7j4",
  },
  {
    name: "Fernando",
    url: "https://www.youtube.com/embed/mZPAgYrpZ3s",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative mb-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Depoimentos <span className="text-gradient-gold">Reais</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Resultados de quem já começou a transformação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card-gold p-4 rounded-2xl">
                <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-card/20">
                  <div className="absolute inset-0 pointer-events-none" />
                  <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                    <iframe
                      title={`Depoimento de ${t.name}`}
                      src={`${t.url}?rel=0&modestbranding=1&controls=1`}
                      className="absolute inset-0 w-full h-full"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <PlayCircle className="w-4 h-4" />
                    Vídeo
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="font-semibold text-foreground">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
