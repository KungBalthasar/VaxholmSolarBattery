import { Home, Battery, Building2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Home Solar Systems",
    description: "Tailored for Swedish rooftops, maximizing energy production.",
  },
  {
    icon: Battery,
    title: "Battery Storage Solutions",
    description: "Store excess energy for later use, enhancing energy independence.",
  },
  {
    icon: Building2,
    title: "Commercial & Multi-Family Units",
    description: "Complete solar installations for businesses and housing associations.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional solar and battery solutions designed for Swedish climate and homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center p-6 hover-elevate transition-all"
              data-testid={`card-service-${index}`}
            >
              <CardHeader className="space-y-4">
                <div className="mx-auto w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
