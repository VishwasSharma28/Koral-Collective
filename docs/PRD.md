# Product Requirements Document — Coral Collective Website

## 1. Overview

### 1.1 Purpose

Coral Collective is a collective storytelling website that explores the cultural significance of Tulunadu and showcases its rich heritage, mouthwatering cuisine, and beautiful traditions. The website is an experiential, story-driven digital presence that introduces visitors to Coral Collective, surfaces two primary offerings, and guides them through immersive exploration toward direct contact and enquiry.

### 1.2 Product Vision

Create a coastal, natural, premium, and human digital experience that feels artistic and experiential rather than transactional. The site prioritizes narrative, visual immersion, and discovery over e-commerce or account management.

### 1.3 Core User Journey

```
Website Entry
  → immersive hero / scroll animation
  → Home
  → choose one of two main offerings
  → rotating circular scroll exploration
  → select an individual experience / card
  → experience detail view
  → direct contact / enquiry
```

### 1.4 Explicit Non-Goals (MVP and Near-Term)

- No online payment system
- No authentication or user accounts
- No checkout flow
- No admin dashboard
- No unnecessary backend or database infrastructure
- No complex CMS for MVP

---

## 2. Target Audience

| Segment | Description | Primary Need |
|---------|-------------|--------------|
| Cultural explorers | Visitors interested in Tulunadu heritage, food, and traditions | Discover authentic experiences and stories |
| Experience seekers | Individuals or small groups looking for curated half-day or café experiences | Understand offerings and enquire easily |
| Collaborators & press | Partners, media, and community members | Learn about the collective, team, and mission |
| Local & diaspora audiences | People connected to coastal Karnataka / Tulunadu | Feel represented; find resources and gallery content |

---

## 3. Information Architecture

### 3.1 Primary Navigation

Persistent top-level navigation:

| Nav Item | Purpose |
|----------|---------|
| **Home** | Entry after hero transition; introduction to Coral Collective and the two main offerings |
| **About** | Mission, story, cultural context, and values |
| **Team** | People behind the collective |
| **Gallery** | Visual storytelling — imagery from experiences, place, and community |
| **Resources** | Supporting content — links, references, downloads, or curated reading |

### 3.2 Primary Offerings

Two main offering categories drive the experiential exploration flow:

1. **Café Collective** — Food, gathering, and café-centered cultural experiences rooted in Tulunadu cuisine and community.
2. **Half-Day Experience** — Curated, time-bound experiential journeys showcasing heritage, place, and tradition.

Each offering opens a dedicated rotating circular scroll explorer containing individual experience cards/items.

### 3.3 Page Inventory

| Page / View | Route (suggested) | Description |
|-------------|-------------------|-------------|
| Hero entry | `/` (initial state) | Full-viewport immersive entry; scroll-driven transition into Home |
| Home | `/` or `/home` | Brand introduction, offering selection |
| Offering explorer | `/offerings/[offering-slug]` | Rotating circular scroll of experience cards for selected offering |
| Experience detail | `/experiences/[experience-slug]` | Full detail for a single experience |
| About | `/about` | Organization story and cultural positioning |
| Team | `/team` | Team member profiles |
| Gallery | `/gallery` | Photo / media grid or curated sections |
| Resources | `/resources` | Links, documents, and reference material |
| Contact / Enquiry | External or anchored | WhatsApp, email, or form that routes to direct contact — not payment |

---

## 4. Functional Requirements

### 4.1 Hero Entry & Scroll Transition

| ID | Requirement | Priority |
|----|-------------|----------|
| H-01 | On first visit, display a full-viewport immersive hero before primary Home content | Must |
| H-02 | Hero responds to scroll input — visual transformation driven by scroll progress | Must |
| H-03 | Scroll transition resolves into the Home page layout without jarring reload | Must |
| H-04 | Hero animation must be skippable or fast-pathable for accessibility (reduced motion, skip control) | Should |
| H-05 | Returning visitors may land directly on Home or see abbreviated entry (implementation decision documented at build time) | Could |

### 4.2 Home

| ID | Requirement | Priority |
|----|-------------|----------|
| HO-01 | Introduce Coral Collective — who they are, Tulunadu cultural storytelling, and experiential positioning | Must |
| HO-02 | Present two offering entry points: Café Collective and Half-Day Experience | Must |
| HO-03 | Selecting an offering navigates to that offering's circular explorer | Must |
| HO-04 | Global navigation accessible from Home | Must |
| HO-05 | Clear contact / enquiry affordance visible or reachable from Home | Must |

### 4.3 Offering Selection & Circular Explorer

| ID | Requirement | Priority |
|----|-------------|----------|
| O-01 | Each offering has a distinct explorer view with a rotating circular scroll interaction | Must |
| O-02 | Scroll input drives card movement around the circular path | Must |
| O-03 | One card is visually emphasized as "active" at a time | Must |
| O-04 | User can select the active (or focused) card to open experience detail | Must |
| O-05 | Explorer supports keyboard navigation and non-scroll alternatives where feasible | Should |
| O-06 | Offering title, short description, and back navigation to Home | Must |

### 4.4 Experience Cards & Detail View

| ID | Requirement | Priority |
|----|-------------|----------|
| E-01 | Each experience card displays at minimum: title, thumbnail/image, and short teaser | Must |
| E-02 | Detail view includes: title, description, imagery, duration/format (if applicable), highlights, and enquiry CTA | Must |
| E-03 | Detail view links back to explorer and Home | Must |
| E-04 | Experience content is data-driven, not hardcoded in presentation components | Must |
| E-05 | Empty or missing content fields degrade gracefully | Should |

### 4.5 Contact & Enquiry

| ID | Requirement | Priority |
|----|-------------|----------|
| C-01 | Primary conversion action is direct contact — e.g. WhatsApp deep link, email, or simple enquiry form | Must |
| C-02 | No payment, pricing checkout, or booking confirmation on-site for MVP | Must |
| C-03 | Contact mechanism reachable from experience detail, Home, and global nav/footer | Must |
| C-04 | Enquiry form (if used) submits to email service or static handoff — no custom backend required for MVP | Should |

### 4.6 Supporting Pages

#### About
- Mission, origin story, connection to Tulunadu
- Values: coastal, natural, premium, human, artistic, experiential, story-driven
- Optional timeline or narrative sections

#### Team
- Team member cards: name, role, photo, short bio
- Data-driven structure for scalability

#### Gallery
- Curated visual grid or sections
- Lazy-loaded media; alt text for all images
- Optional lightbox for enlarged view

#### Resources
- Curated links, reading lists, downloads, or partner references
- Organized by category where volume grows

---

## 5. Content Structure

### 5.1 Content Model (Conceptual)

```
Organization
├── Offerings[]
│   ├── id, slug, title, description, heroImage
│   └── Experiences[]
│       ├── id, slug, title, teaser, description, images[], highlights[], duration?, tags[]
│       └── contactContext (optional pre-filled enquiry message)
├── TeamMembers[]
├── GalleryItems[]
└── Resources[]
```

### 5.2 Content Sources (MVP)

- Static JSON, Markdown, or TypeScript content modules in the repository
- No complex CMS or database for MVP
- Content separated from presentation components

### 5.3 Copy & Media Guidelines

- Voice: warm, human, story-led — not corporate or sales-heavy
- Imagery: coastal landscapes, food, craft, people, and place — authentic Tulunadu visual language
- All media optimized for web (responsive sizes, modern formats where supported)

---

## 6. Interaction & UX Requirements

### 6.1 Navigation Behavior

- Global nav persistent across all pages except possibly during hero entry
- Active nav state reflects current section
- Mobile: collapsible menu; touch-friendly targets (min 44×44px)
- Breadcrumb or back affordance within offering → experience flows

### 6.2 Scroll & Animation

- Hero and circular explorer animations are scroll-driven but must respect `prefers-reduced-motion`
- Animations use GPU-friendly transforms; avoid layout thrashing
- Animation logic isolated from content and layout components

### 6.3 States

Each interactive surface should define: default, hover/focus, active, loading (if async), and error (if applicable).

---

## 7. Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (< 768px) | Single-column layouts; simplified circular explorer (may adapt to vertical card stack with scroll-snap while preserving exploration feel); hamburger nav |
| Tablet (768px – 1024px) | Two-column where appropriate; scaled circular explorer |
| Desktop (> 1024px) | Full immersive layouts; full circular scroll experience |

Requirements:
- All text readable without horizontal scroll
- Images use responsive `srcset` or equivalent
- Touch and pointer input both supported
- Hero and explorer remain usable on small viewports

---

## 8. Accessibility Expectations

- WCAG 2.1 Level AA as target
- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`)
- Keyboard navigable: nav, offering cards, explorer, CTAs
- Visible focus indicators
- Alt text for meaningful images; decorative images marked appropriately
- Sufficient color contrast (4.5:1 body text, 3:1 large text/UI)
- `prefers-reduced-motion`: provide reduced or static alternatives for hero and circular animations
- Skip link to main content
- Form labels and error messages associated with inputs (if enquiry form present)

---

## 9. Performance Expectations

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s on mid-range mobile over 4G |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200ms |
| Initial JS bundle | Minimize; code-split by route and heavy animation modules |
| Images | Lazy-loaded below fold; compressed; modern formats |
| Fonts | Subset; preload critical weights only |

Additional:
- Hero and explorer assets loaded progressively
- No blocking third-party scripts unless essential (e.g. analytics — out of MVP scope unless requested)

---

## 10. Scalability Requirements

### 10.1 Content Scalability

- Add new experiences by updating content data only — no component rewrites
- Support additional offerings in future without architectural change
- Team, gallery, and resources follow same data-driven pattern

### 10.2 Technical Scalability

- Component library approach: reusable React/TypeScript components
- Clear separation: content/data layer, presentation layer, animation layer
- Route structure supports deep linking to offerings and experiences
- Build-time static generation preferred for MVP (SSG); optional SSR later if needed

### 10.3 Future Considerations (Post-MVP, Not in Scope Now)

- Headless CMS integration
- Booking system with calendar
- Payment processing
- User accounts and saved preferences
- Admin dashboard for content management
- Multi-language support

---

## 11. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| **Security** | No auth surface; sanitize any form input; HTTPS only in production |
| **Privacy** | Minimal data collection; no unnecessary cookies for MVP |
| **Maintainability** | TypeScript strict mode; documented content schema; isolated animation modules |
| **Deployability** | Static or edge-deployable; no required server runtime for MVP |
| **Browser support** | Latest two versions of Chrome, Firefox, Safari, Edge; iOS Safari and Chrome Android |
| **SEO** | Meta tags, Open Graph, semantic headings, crawlable routes for all public pages |
| **Analytics** | Optional; not required for MVP |

---

## 12. Success Criteria

The product succeeds when a first-time visitor can:

1. Enter through an immersive hero and arrive at Home
2. Understand what Coral Collective is and what Tulunadu storytelling means
3. Choose Café Collective or Half-Day Experience
4. Explore experiences via the circular scroll interaction
5. Open an experience detail page and understand the offering
6. Contact Coral Collective (e.g. WhatsApp) without encountering payment or login

Supporting pages (About, Team, Gallery, Resources) are reachable, readable, and consistent with brand direction.

---

## 13. Open Questions

Document and resolve during implementation planning:

1. Final brand naming consistency: "Coral Collective" vs "Koral" (per repository README)
2. Exact WhatsApp number / contact details and pre-filled message templates
3. Complete inventory of Café Collective and Half-Day Experience cards for launch
4. Whether hero entry replays on every visit or only first session
5. Enquiry form vs WhatsApp-only for MVP conversion path

---

## 14. Document References

- [MVP Scope](./MVP.md)
- [User Flows](./USER_FLOW.md)
- [Design Direction](./DESIGN_DIRECTION.md)
