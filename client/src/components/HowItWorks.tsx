import { MessageSquare, Wrench, Headphones } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Consultation & Quote",
    description: "Free assessment and personalized proposal.",
  },
  {
    number: "2",
    icon: Wrench,
    title: "Installation",
    description: "Certified installers ensure quick and efficient setup.",
  },
  {
    number: "3",
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing monitoring and service for optimal performance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Simple steps to sustainable energy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              data-testid={`step-${index}`}
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 rounded-md bg-primary text-primary-foreground flex items-center justify-center">
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
