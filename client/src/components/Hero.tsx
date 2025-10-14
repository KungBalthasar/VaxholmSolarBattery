import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/image_1760462174037.png";

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels on a residential roof in Vaxholm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Solceller & batterier i Vaxholm
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/95">
            Sänk dina elkostnader — hållbar energi anpassad för svenska förhållanden.
          </p>
          <p className="text-lg mb-8 text-white/90">
            Snabb offert · Installation · Service
          </p>
          <Button
            size="lg"
            onClick={onCTAClick}
            className="text-lg px-8 py-6"
            data-testid="button-cta-hero"
          >
            Boka kostnadsfri rådgivning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
