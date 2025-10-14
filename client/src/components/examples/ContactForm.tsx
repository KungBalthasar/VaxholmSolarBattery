import ContactForm from "../ContactForm";
import { ThemeProvider } from "../ThemeProvider";

export default function ContactFormExample() {
  return (
    <ThemeProvider>
      <ContactForm />
    </ThemeProvider>
  );
}
