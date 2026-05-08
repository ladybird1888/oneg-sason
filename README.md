# 🌿 Oneg Sason Empowerment Foundation — Next.js Website

A modern, responsive, multi-page website for a global non-profit foundation. Built with **Next.js 14 App Router**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css              # Design system: fonts, animations, utilities
│   ├── layout.tsx               # Root layout with Header + Footer
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About Us
│   ├── our-work/page.tsx        # Programs & Initiatives
│   ├── get-involved/page.tsx    # Donate / Volunteer / Partner / Sponsor
│   ├── impact-partners/page.tsx # Partner Wall / Reports / Gallery
│   └── contact/page.tsx         # Contact Form / Offices / FAQ
│
└── components/
    ├── Header.tsx               # Sticky nav with mobile menu + CTA buttons
    ├── Footer.tsx               # Newsletter signup + quick links + social
    ├── AnimatedCounter.tsx      # Intersection-observer count-up numbers
    ├── AnimatedSection.tsx      # Scroll-triggered fade/slide-in wrapper
    ├── Testimonials.tsx         # Carousel with quotes from beneficiaries
    ├── LatestNews.tsx           # News & stories card grid
    ├── GlobalImpactMap.tsx      # Regional stats + SDG alignment display
    ├── ProgramCard.tsx          # Reusable program card with hover effects
    └── StickyDonateBar.tsx      # Scroll-triggered sticky bottom CTA bar
```

---

## 🎨 Design System

### Color Palette

| Token        | Hex       | Usage                        |
| ------------ | --------- | ---------------------------- |
| Gold         | `#D4A017` | Primary CTA buttons, accents |
| Gold Light   | `#F5C842` | Hover states, highlights     |
| Forest Green | `#2D7D46` | Secondary buttons, headers   |
| Green Light  | `#4CAF72` | Hover states                 |
| Yellow       | `#FFD700` | Hero accents, badges         |
| Cream        | `#FFFDF5` | Page backgrounds             |
| Dark Green   | `#1A2E1A` | Body text                    |

### Typography

- **Display**: Playfair Display (headings, hero text, section titles)
- **Body**: DM Sans (paragraphs, labels, navigation)

### CSS Utility Classes

```css
.btn-gold        /* Gold shimmer gradient button */
.btn-green       /* Forest green gradient button */
.card-hover      /* Lift + shadow on hover */
.hero-overlay    /* Gradient overlay for hero backgrounds */
.font-display    /* Apply Playfair Display */
.text-gradient   /* Gold-to-green gradient text */
.input-field     /* Styled form input with focus ring */
.masonry-grid    /* 3-column masonry layout */
.carousel-track  /* Auto-scrolling logo carousel */
.tier-gold/silver/bronze  /* Sponsorship tier card styles */
```

---

## 📄 Pages

### 🏠 Home (`/`)

- Full-screen hero with animated CTA
- Animated impact counter (2.4M lives, 140+ countries, 850+ programs, 35K volunteers)
- About teaser with offset image layout
- 4-program preview grid with hover cards
- Testimonials carousel (4 rotating stories)
- Global Impact Map with regional breakdown + UN SDG badges
- Core values grid
- Latest News 3-column card grid
- Bottom CTA banner
- Sticky Donate Bar (appears after 600px scroll)

### 👥 About (`/about`)

- Hero with overlay
- Founder story with image + decorative badges
- Vision card (dark) + Mission card (gold) side-by-side
- 6 Core Values grid
- 6-milestone vertical timeline (2005–2024)
- Team section with hover photo cards

### 🌍 Our Work (`/our-work`)

- Hero
- 6 full program cards (Environment, Education, Water, Women, Health, Agriculture)
  - Each: image, category badge, region, description, 3 impact stats, CTA
- 3-column "Our Approach" section

### 🤝 Get Involved (`/get-involved`)

- Quick-nav anchor buttons
- **Donate**: One-time/monthly toggle, 6 preset amounts, custom input, dynamic impact calculator, Donate button
- **Volunteer**: Full sign-up form with interest checkboxes, availability selector
- **Partnership**: Professional inquiry form with org type selector
- **Sponsorship Tiers**: Gold ($50K+), Silver ($25K+), Bronze ($10K+) — each with full benefits list

### 📊 Impact & Partners (`/impact-partners`)

- Auto-scrolling logo carousel (12 partners)
- Static partner grid
- 3 expandable Annual Impact Reports (2022–2024) with fund allocation bar charts
- Masonry photo gallery (9 images) filterable by year (2022/2023/2024/All)
- Awards section

### 📬 Contact (`/contact`)

- Contact form with subject dropdown + privacy checkbox
- Contact info sidebar with social links
- Map placeholder (links to Google Maps)
- 4 Global Office cards (Geneva, Nairobi, New York, Bangkok)
- FAQ accordion (4 questions)

---

## ⚙️ Customisation Guide

### Changing Foundation Name & Branding

1. Update name in `src/app/layout.tsx` (metadata)
2. Update logo/name in `src/components/Header.tsx` and `Footer.tsx`

### Updating Impact Numbers

Edit the `impactStats` array in `src/app/page.tsx`:

```tsx
const impactStats = [
  { number: 2400000, suffix: "+", label: "Lives Impacted", icon: Heart },
  // ...
];
```

### Adding a New Program

Add to the `programs` array in `src/app/our-work/page.tsx`:

```tsx
{
  emoji: '🏥',
  category: 'Health',
  title: 'Your Program Title',
  description: 'Program description...',
  impact: ['Stat 1', 'Stat 2', 'Stat 3'],
  image: 'https://images.unsplash.com/...',
  color: 'border-red-500',
  regions: 'Region, Country',
}
```

### Adding Partners/Sponsors to the Wall

Edit the `sponsors` array in `src/app/impact-partners/page.tsx`.

### Adding Gallery Images

Edit the `galleryImages` array in `src/app/impact-partners/page.tsx`:

```tsx
{ src: 'YOUR_IMAGE_URL', alt: 'Description', category: '2024', event: 'Event Name' }
```

### Connecting a Real Payment Gateway

In `src/app/get-involved/page.tsx`, replace the `alert()` in the donate button's `onClick` with your Stripe/PayPal integration:

```tsx
onClick={() => {
  // Stripe example:
  stripe.redirectToCheckout({ lineItems: [...], mode: 'payment', ... })
}}
```

### Adding Google Maps Embed

Replace the map placeholder in `src/app/contact/page.tsx` with:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%"
  height="100%"
  className="rounded-2xl"
  allowFullScreen
/>
```

### Enabling Newsletter (e.g. Mailchimp)

In `src/components/Footer.tsx`, update `handleSubscribe`:

```tsx
const handleSubscribe = async (e) => {
  e.preventDefault();
  await fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
  setSubscribed(true);
};
```

---

## 📦 Dependencies

| Package      | Version  | Purpose       |
| ------------ | -------- | ------------- |
| next         | 14.2.5   | Framework     |
| react        | ^18      | UI library    |
| react-dom    | ^18      | DOM rendering |
| lucide-react | ^0.383.0 | Icon set      |
| tailwindcss  | ^3.4.1   | Utility CSS   |
| typescript   | ^5       | Type safety   |

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Deploy the .next folder or connect GitHub repo
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## ✅ Feature Checklist

- [x] Sticky transparent→white header
- [x] Mobile hamburger menu with slide-down panel
- [x] Donate + Get Involved CTA in nav
- [x] Hero with parallax-ready full-screen image
- [x] Animated scroll-triggered impact counters
- [x] Card hover lift effects throughout
- [x] Testimonials carousel with dot + arrow controls
- [x] Program cards with image zoom on hover
- [x] Donation amount selector + impact calculator
- [x] Volunteer form with multi-select interest checkboxes
- [x] Partnership inquiry form
- [x] Sponsorship tier cards (Gold/Silver/Bronze)
- [x] Auto-scrolling logo carousel
- [x] Expandable impact reports with bar chart infographics
- [x] Masonry gallery with year filter
- [x] Global office cards with contact details
- [x] FAQ accordion
- [x] Newsletter signup in footer
- [x] Sticky bottom donate bar (scroll-triggered)
- [x] UN SDG alignment badges
- [x] Regional impact breakdown
- [x] Mobile-first responsive design
- [x] Google Fonts (Playfair Display + DM Sans)
- [x] Smooth scroll behavior
- [x] Custom scrollbar styling
- [x] Professional footer with social links

---

Built with ❤️ for a better world.
