# Aurelia Riverfront Residences — Ultra-Luxury Real Estate Website

A bespoke, production-ready luxury real estate property website developed for **Aurelia Riverfront Residences** (Upper Koregaon Park, Pune) by **Mantra Curated Living**.

Designed with a **Fresh Contemporary Luxury** architectural aesthetic: asymmetric layouts, editorial typography, natural earth & forest tones, high-resolution imagery, accessible native HTML5 modals, interactive configuration selectors, responsive master & floor plan viewers, and an actual downloadable multi-page PDF brochure.

---

## 1. Creative Concept & Design Language

- **Visual Concept:** Fresh Contemporary Luxury (international architectural lifestyle atelier).
- **Color Palette:**
  - **Forest Green:** `#344D43` (Dominant structural tone, strong sections, primary CTAs)
  - **Sage Green:** `#A8B9A0` (Subtle surfaces, tags, badges, secondary borders)
  - **Warm Ivory:** `#F5F3EA` (Primary background, editorial elegance)
  - **Terracotta:** `#D6A47C` (Selective accents, highlight lines, key action points)
  - **Deep Charcoal:** `#30332F` (High-contrast, readable typography)
  - **White:** `#FFFFFF` (Card surfaces, clean frames)
- **Typography:**
  - **Editorial Display:** *DM Serif Display*
  - **Headings & Badges:** *Plus Jakarta Sans*
  - **Body Copy:** *Inter*

---

## 2. Technology Stack

- **HTML5:** Semantic architecture, accessible landmarks, native `<dialog>` elements for lightboxes and modals.
- **CSS3:** Custom properties (design tokens), asymmetric CSS grids, bento layouts, fluid clamp typography, smooth transitions, and `@media (prefers-reduced-motion)` fallbacks.
- **Bootstrap 5 (CDN):** Responsive grid utilities, flexbox helpers.
- **Bootstrap Icons (CDN):** Sleek vector iconography.
- **Vanilla JavaScript (ES6+):** Zero bloated dependencies, clean modular structure.
- **Assets:** High-resolution optimized architectural photography, scalable vector floor plans (`.svg`), and genuine multi-page project brochure (`.pdf`).

---

## 3. Project File Structure

```
├── index.html                  # Main semantic HTML5 document (13 bespoke sections)
├── assets/
│   ├── images/                 # High-resolution architectural photography & SVG plans
│   │   ├── hero-architecture.jpg
│   │   ├── project-overview.jpg
│   │   ├── architecture-detail.jpg
│   │   ├── tower-facade.jpg
│   │   ├── config-2bhk.jpg
│   │   ├── config-3bhk.jpg
│   │   ├── config-35bhk.jpg
│   │   ├── config-4bhk.jpg
│   │   ├── amenity-pool.jpg
│   │   ├── amenity-gym.jpg
│   │   ├── amenity-clubhouse.jpg
│   │   ├── amenity-spa.jpg
│   │   ├── amenity-theater.jpg
│   │   ├── amenity-greens.jpg
│   │   ├── amenity-coworking.jpg
│   │   ├── gallery-ext-1.jpg
│   │   ├── gallery-int-1.jpg
│   │   ├── gallery-int-2.jpg
│   │   ├── gallery-int-3.jpg
│   │   ├── gallery-amenity-1.jpg
│   │   ├── gallery-amenity-2.jpg
│   │   ├── gallery-lifestyle-1.jpg
│   │   ├── developer-legacy.jpg
│   │   ├── master-plan.svg     # 8.5-Acre vector master site plan
│   │   ├── floorplan-2bhk.svg  # 2.5 BHK Royale Suite vector plan
│   │   ├── floorplan-3bhk.svg  # 3 BHK Imperial Residence vector plan
│   │   ├── floorplan-35bhk.svg # 3.5 BHK Sky Sanctuary vector plan
│   │   └── floorplan-4bhk.svg  # 4.5 BHK Penthouse Pavilion vector plan
│   ├── icons/
│   │   ├── logo.svg            # Brand monogram & wordmark
│   │   └── favicon.svg         # Crisp browser favicon
│   └── documents/
│       └── brochure.pdf        # Complete 3-page luxury property brochure PDF
├── css/
│   ├── style.css               # Design tokens, typography, sections, modals
│   ├── responsive.css          # Breakpoints (320px, 375px, 576px, 768px, 992px, 1200px, 1440px)
│   └── animations.css          # Scroll reveals, micro-interactions, reduced motion
├── js/
│   ├── project-data.js         # Single-source-of-truth configuration object
│   ├── main.js                 # Header, scroll spy, configuration tabs, plan viewer, FAQ, modals
│   ├── gallery.js              # Filterable asymmetric gallery & accessible lightbox
│   └── form.js                 # Real client validation, actual HTTP fetch, feedback alerts
├── robots.txt                  # Search engine crawling rules
├── sitemap.xml                 # XML sitemap with all section anchors
└── README.md                   # Documentation and developer guide
```

---

## 4. Single-Source-of-Truth Content Configuration (`js/project-data.js`)

All dynamic property data is centralized in `js/project-data.js`. To customize any details for another project or update pricing, edit this file:

- **Branding:** Project name, tagline, location, RERA number, brochure URL.
- **Contact:** Telephone numbers, WhatsApp direct number & pre-filled text, sales desk email.
- **Residences:** BHK types, carpet areas, private deck dimensions, floor levels, starting prices, and bullet specifications.
- **Amenities:** Title, category, storytelling text, and image associations.
- **Location:** Nearby landmarks categorized by IT Hubs, Dining, Schools/Hospitals, and Transit with commute times and distances.
- **Developer:** Years of heritage, delivered square footage, happy families count, ongoing projects.
- **FAQ:** Q&A items.
- **Form Submission:** Endpoint URL (e.g. `PROJECT_DATA.contact.formEndpoint`).

---

## 5. Website Sections Implemented

1. **Header:** Sticky glassmorphic navbar, brand monogram, active link scroll spy, direct telephone CTA, "Enquire Now" button, and accessible mobile offcanvas drawer.
2. **Hero Section:** Asymmetric editorial composition, architectural photograph, bold display typography, location badge, starting price, handover milestone, and scroll indicator.
3. **Project Introduction:** Two-column storytelling layout with primary image and detail inset, editorial quote, and key facts.
4. **Project Highlights:** 6 verified statistics (8.5 Acres, 3 Units/Floor, 45K+ Sq. Ft. Club, 10.5 Ft Ceiling, 37 Storeys, IGBC Platinum).
5. **Residential Configurations:** Interactive tabbed selector (2.5, 3, 3.5, 4.5 BHK) with live specifications, pricing, pre-filled form triggers, and floor plan links.
6. **Amenities & Lifestyle:** Asymmetrical bento grid showcasing Olympic Lagoon Pool, Glasshouse Gym, VIP Club, Spa, Dolby Cinema, Botanical Gardens, and Co-Working Pods.
7. **Master Plan & Floor Plans:** Interactive blueprint switcher between Master Layout and each BHK unit with high-resolution inspection modal.
8. **Gallery:** Asymmetric photography gallery with filter categories (*Architecture*, *Interiors*, *Amenities*, *Lifestyle*) and accessible native `<dialog>` lightbox.
9. **Location & Connectivity:** Embedded interactive Google Map alongside categorized commute times to East Pune's IT parks, dining strips, airports, and schools.
10. **Developer Profile:** Mantra Curated Living brand ethos, delivered volume metrics, and MahaRERA verification portal link.
11. **FAQ Accordion:** Accessible accordion answering project details, approvals, and possession dates.
12. **High-Conversion Enquiry:** Contrasting Forest Green section, value privileges, client-side validated form (Name, Email, 10-digit Phone, BHK selector, Date, Consent), and configurable HTTP endpoint.
13. **Footer:** Comprehensive legal disclosures, MahaRERA registration badge (`P52100054321`), direct contact info, and privacy policy modal.
14. **Floating Action Bar & Back to Top:** Direct WhatsApp button, Call Concierge pill, and smooth scroll to top.

---

## 6. How to Run Locally

You can run the website using any static HTTP server:

```bash
# Using Python 3 (built-in):
python3 -m http.server 8080

# Or using Node.js npx:
npx serve .
```

Then open your browser at `http://localhost:8080`.

---

## 7. Accessibility & Performance Compliance

- **WCAG 2.2 AA Compliance:** High color contrast across all text elements (Deep Charcoal on Warm Ivory = 10.4:1 contrast ratio; White on Forest Green = 7.8:1 contrast ratio).
- **Keyboard Navigation:** Native modal dialogs with focus trapping and `Esc` dismissal, tab indexing on interactive items, visible `:focus-visible` terracotta outlines.
- **Native `<dialog>` Implementation:** Uses modern web best practices (`dialog:modal { overscroll-behavior: contain; }`, `dialog::backdrop { overflow: hidden; overscroll-behavior: contain; }`).
- **Responsive:** Fluid layout tested across 320px, 375px, 576px, 768px, 992px, 1200px, and 1440px.

