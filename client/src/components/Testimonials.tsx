import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bra service och snabb installation!",
    author: "Fredrik L.",
    location: "Vaxholm",
  },
  {
    quote: "Professionellt team och utmärkta resultat. Våra elkostnader har sjunkit kraftigt.",
    author: "Maria S.",
    location: "Stockholm",
  },
  {
    quote: "Mycket kunniga om svenska klimatkrav. Rekommenderar starkt!",
    author: "Anders K.",
    location: "Lidingö",
  },
  {
    quote: "Batterilagringen har gjort oss nästan energioberoende. Fantastiskt jobb!",
    author: "Lisa M.",
    location: "Uppsala",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vad våra kunder säger</h2>
          <p className="text-lg text-muted-foreground">
            Betrodda av villaägare och företag i hela Sverige
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all"
              data-testid={`testimonial-${index}`}
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
