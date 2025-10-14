import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Namnet måste vara minst 2 tecken"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().optional(),
  city: z.string().min(2, "Stad krävs"),
  serviceType: z.enum(["home", "business", "service"], {
    required_error: "Välj en tjänstetyp",
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Tack!",
      description: "Vi återkommer inom 48 timmar.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Boka kostnadsfri rådgivning</h2>
          <p className="text-lg text-muted-foreground">
            Fyll i formuläret nedan så kontaktar vi dig inom 48 timmar
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>För- & Efternamn *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Erik Andersson"
                      {...field}
                      data-testid="input-full-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-post *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="erik@exempel.se"
                        {...field}
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon *</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+46 70 123 4567"
                        {...field}
                        data-testid="input-phone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stad *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Vaxholm"
                        {...field}
                        data-testid="input-city"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vad vill du ha hjälp med? *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      data-testid="select-service-type"
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Välj tjänstetyp" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="home">Hem</SelectItem>
                        <SelectItem value="business">Företag / BRF</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meddelande (valfritt)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Berätta om ditt projekt..."
                      className="resize-none"
                      rows={5}
                      {...field}
                      data-testid="input-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              data-testid="button-submit-contact"
            >
              Skicka
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
