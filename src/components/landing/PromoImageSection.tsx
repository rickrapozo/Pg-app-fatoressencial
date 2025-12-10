import * as React from "react";
import mockupDevices from "@/assets/mockup-devices.png";

const sources = ["/hand-mentor.png", "/hand-mentor.webp", "/hand-mentor.jpg"];

const PromoImageSection = () => {
  const [index, setIndex] = React.useState(0);
  const imgSrc = index < sources.length ? sources[index] : mockupDevices;
  return (
    <section className="relative mb-4">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/10 shadow-xl promo-img-box">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
            <img
              src={imgSrc}
              alt="Mentor AI no dispositivo em mãos"
              className="promo-img"
              loading="lazy"
              onError={() => setIndex((i) => i + 1)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoImageSection;
