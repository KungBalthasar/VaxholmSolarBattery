import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vaxholm Solar & Battery</h3>
            <p className="text-muted-foreground">
              Sustainable Energy Solutions for Homes & Businesses
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <a
                href="mailto:charlie@twiston.se"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                <span>charlie@twiston.se</span>
              </a>
              <a
                href="tel:+46703866696"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="h-4 w-4" />
                <span>+46 70 386 6696</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Campusgränd 1, Vaxholm</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Solar Panel Installation</li>
              <li>Battery Storage Solutions</li>
              <li>Commercial Projects</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Vaxholm Solar & Battery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
