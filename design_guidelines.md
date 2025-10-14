# Vaxholm Solar & Battery - Design Guidelines

## Design Approach
**Reference-Based + Minimalist Clean Aesthetic** - Drawing inspiration from sustainable energy companies and Nordic design principles emphasizing clarity, trust, and environmental consciousness.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Background: Pure White (#FFFFFF)
- Primary Accent: Dark Green `155 82% 23%` (#0b6b4a) OR Deep Blue `210 85% 35%` (#0a58a8)
- Text: Charcoal Gray for body text, near-black for headings

**Usage:**
- Accent colors for CTAs, headings, and interactive elements
- White background throughout for clean, spacious feel
- Minimal use of gradients - maintain flat, crisp aesthetic

### B. Typography
**Font Family:** Inter or system-ui stack
- Headings: Bold weights (700-800), larger sizes
- Body: Regular weight (400), comfortable reading size
- Spacing: Generous line-height for readability

**Hierarchy:**
- H1 (Hero): Extra large, bold
- H2 (Section Headers): Large, bold
- H3 (Service/Feature Titles): Medium, semi-bold
- Body: Clear, readable paragraphs with ample spacing

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, m-8, py-12, gap-16, etc.)
- Sections: Generous vertical padding (py-16 to py-24)
- Inner content: max-w-6xl or max-w-7xl containers
- Cards/components: Consistent spacing with p-6 or p-8

**Grid System:**
- Services: 3 columns desktop → 1 column mobile
- Project Gallery: 3 columns desktop → 1 column mobile
- Responsive breakpoints: Mobile-first approach

### D. Component Library

**Hero Section:**
- Large hero image (Sunshine shop_edited.png or IMG_8079.webp)
- Bold heading: "Solar Panels & Battery Storage in Vaxholm"
- Subheading with service highlights
- Prominent "Get a Free Quote" CTA button (accent color background)
- Full-width or contained layout with image and text overlay/side-by-side

**Service Cards (3-Column Grid):**
- Icon at top (solar panel, battery, building icons)
- Service title (semi-bold)
- 1-2 line description
- Clean card design with subtle borders or shadows
- Equal height cards with consistent padding

**How It Works (3-Step Process):**
- Numbered steps (1, 2, 3) with visual indicators
- Step title and brief description
- Horizontal flow on desktop, vertical stack on mobile
- Icons or illustrations for each step

**Project Gallery:**
- Masonry or uniform grid layout
- Image cards with overlay text (location, size, year)
- Example: "Vaxholm – 6.4 kW – 2024"
- Lightbox functionality: Click opens larger view with 4-6 bullet point project details
- Images: 2.jpg, 2023-02-15_edited.jpg, and other project images
- Alt text for all images

**Testimonials:**
- 4-6 customer reviews in grid or carousel
- Customer name (e.g., "Fredrik L.")
- Optional profile picture placeholder
- Quote text with visual quotation marks or styling

**Contact Form:**
- Clean, structured form layout
- Required fields: Full Name, Email, City
- Optional fields: Phone, Message
- Dropdown: Service type (Home/Business/Service)
- "Send Message" button (accent color)
- Confirmation message: "Thank you! We'll get back to you within 48 hours."
- Submits to charlie@twiston.se

**Footer:**
- Multi-column layout with contact info
- Email: charlie@twiston.se
- Phone: +46 70 386 6696
- Address: Campusgränd 1, Vaxholm
- Copyright: © 2025 Vaxholm Solar & Battery
- Optional: Quick links, social media icons

### E. Animations
**Minimal & Purposeful:**
- Subtle hover effects on buttons and cards
- Smooth scroll-to-section for CTA button
- Lightbox open/close transitions
- No distracting parallax or excessive motion

## Images
**Hero Section:**
- Large, prominent hero image: Sunshine shop_edited.png or IMG_8079.webp
- Alt text: "Solar panels on a residential roof in Vaxholm"
- Full-width or 50% width with text alongside

**Project Gallery:**
- Grid of project images: 2.jpg, 2023-02-15_edited.jpg, and additional project photos
- Each with location, system size, year overlay
- Clickable to open lightbox with project details

**Optimization:**
- Compress images for fast loading
- Use appropriate formats (WebP where supported)
- Responsive image sizing

## Additional Sections

**"Why Choose Us" (Optional but Recommended):**
- 3-column grid highlighting:
  - "Swedish climate-adapted panels"
  - "Comprehensive service (consultation → maintenance)"
  - "Local presence in Vaxholm"
- Trust badge: "Certified Installers" (if applicable)

## Accessibility & Technical
- AA contrast standards for all text
- Alt text for all images
- Mobile-responsive design (mobile-first)
- Form validation and user feedback
- Structured data (schema.org LocalBusiness) for SEO

## Spacing & Rhythm
Maintain generous whitespace throughout:
- Between sections: py-16 to py-24
- Within cards/components: p-6 to p-8
- Text margins: mb-4, mb-6 for paragraphs and headings
- Create breathing room - don't cram content