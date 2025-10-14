import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Great service and quick installation!",
    author: "Fredrik L.",
    location: "Vaxholm",
  },
  {
    quote: "Professional team and excellent results. Our energy costs have dropped significantly.",
    author: "Maria S.",
    location: "Stockholm",
  },
  {
    quote: "Very knowledgeable about Swedish climate requirements. Highly recommend!",
    author: "Anders K.",
    location: "Lidingö",
  },
  {
    quote: "The battery storage solution has made us nearly energy independent. Fantastic work!",
    author: "Lisa M.",
    location: "Uppsala",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by homeowners and businesses across Sweden
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
