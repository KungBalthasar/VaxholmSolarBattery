import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/solar_panels_on_resi_f5119d52.jpg";

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
            Solar Panels & Battery Storage in Vaxholm
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/95">
            Reduce your energy costs with sustainable solutions.
          </p>
          <p className="text-lg mb-8 text-white/90">
            Free Consultation · Installation · Ongoing Support
          </p>
          <Button
            size="lg"
            onClick={onCTAClick}
            className="text-lg px-8 py-6"
            data-testid="button-cta-hero"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
