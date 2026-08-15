# Design Direction — Coral Collective Website

## 1. Design Intent

Coral Collective's website should feel **coastal, natural, premium, human, artistic, experiential, and story-driven**. It is a digital extension of Tulunadu cultural storytelling — not a template tourism site or e-commerce storefront.

The experience prioritizes immersion and discovery while remaining **usable, responsive, performant, and scalable**.

---

## 2. Reference Inspiration (Do Not Clone)

Two external references inform specific interaction patterns only. **Coral Collective must have its own visual identity, colors, typography, imagery, layout, branding, and content.**

### Reference 1 — Hero Entry & Scroll Transition

**Source:** [YouTube — Reference 1](https://www.youtube.com/watch?v=0Ezdaeg7veg)

**Borrow interaction concepts only:**
- Immersive hero entry on first load
- Scroll-driven opening sequence
- Visual transformation tied to scroll progress
- Transition from hero state into the main Home layout

**Do not copy:**
- Specific visuals, color palettes, typography, or brand elements from the reference
- Exact timing, easing curves, or asset composition

### Reference 2 — Rotating Circular Scroll Explorer

**Source:** [YouTube — Reference 2](https://www.youtube.com/watch?v=3G6q4tsOU-o)

**Borrow interaction concepts only:**
- Rotating circular scroll mechanic for experience exploration
- Scroll-driven card movement along a circular path
- Active-card emphasis (one card visually dominant at a time)
- Immersive, exploratory feel when browsing offerings

**Do not copy:**
- Layout proportions, card styling, or motion paths verbatim
- Reference site's branding, copy, or content structure

---

## 3. Brand Feeling & Personality

| Attribute | Expression |
|-----------|------------|
| **Coastal** | Open space, horizon lines, sea-washed palettes, breathable layouts |
| **Natural** | Organic shapes, texture, warm materials, unforced photography |
| **Premium** | Restrained motion, quality typography, generous whitespace, no clutter |
| **Human** | Real people, hand-crafted details, warm copy, approachable CTAs |
| **Artistic** | Composed imagery, editorial layout moments, subtle asymmetry |
| **Experiential** | Scroll as journey; interactions reveal story rather than dump information |
| **Story-driven** | Narrative flow from hero → home → offering → experience → contact |

---

## 4. Visual Identity (Coral Collective Original)

> Final hex values and font files to be confirmed during design implementation. Direction below defines intent.

### 4.1 Color Direction

| Role | Direction |
|------|-----------|
| Primary | Deep coral / terracotta — warmth, earth, Tulunadu sun |
| Secondary | Ocean teal / sage — coastal calm |
| Neutral | Warm sand, driftwood grey, soft white — not cold clinical white |
| Accent | Spice gold or turmeric highlight — sparingly for emphasis |
| Text | Charcoal on light backgrounds; warm off-white on dark sections |

Avoid: neon gradients, generic startup blue, harsh pure black (#000) backgrounds.

### 4.2 Typography

| Use | Direction |
|-----|-----------|
| Display / headings | Distinctive serif or humanist display face with cultural warmth — editorial, not corporate |
| Body | Clean, highly readable sans-serif for long-form About/Resources content |
| UI labels | Sans-serif; medium weight; generous letter-spacing on nav |

Hierarchy: large expressive headlines on hero and Home; comfortable body size (16–18px base) for readability.

### 4.3 Imagery

- Authentic photography of Tulunadu: coastline, cuisine, craft, community, landscapes
- Avoid stock-photo generic "tropical beach" clichés
- Consistent color grading: warm, slightly desaturated, natural light
- Illustration (if used): hand-drawn or textured — supplementary, not dominant

### 4.4 Layout Principles

- Full-bleed hero; contained content sections with max-width for readability
- Grid-based supporting pages (Team, Gallery, Resources)
- Circular explorer may break the grid intentionally — a "stage" moment
- Mobile-first spacing; touch-friendly interactive zones

---

## 5. Interaction Design

### 5.1 Hero Entry

**Behavior:**
- Full-viewport on load
- Scroll progress maps to visual transformation (opacity, scale, clip, parallax layers — exact technique TBD at build)
- Resolves into Home without hard cut

**UX safeguards:**
- Skip control or shortened path for accessibility
- `prefers-reduced-motion`: crossfade or static hero → Home
- No scroll-jacking that traps user

### 5.2 Home

- Clear visual hierarchy: brand story first, offerings second
- Two offering cards/tiles with distinct visual identity per offering
- Subtle hover/focus states; no aggressive motion

### 5.3 Circular Explorer

**Behavior:**
- Cards arranged on a circular or elliptical path
- Scroll input rotates the ring or advances active index
- Active card: larger scale, full opacity, optional glow or border
- Inactive cards: reduced scale/opacity, still recognizable

**Mobile adaptation:**
- May simplify to arc or vertical scroll-snap carousel while preserving "one active card" emphasis
- Must remain usable with thumb scroll

**Keyboard:**
- Arrow keys or tab to change active card; Enter to select

### 5.4 Experience Detail

- Editorial layout: hero image, title, body copy, highlight list
- Sticky or persistent enquiry CTA on mobile
- Back affordance to explorer

### 5.5 Contact CTA

- Primary: WhatsApp button — recognizable icon, clear label ("Enquire on WhatsApp")
- Secondary: email link
- Warm, invitational copy — not "Buy now" or "Add to cart"

---

## 6. Motion & Animation Guidelines

| Principle | Guideline |
|-----------|-----------|
| Purpose | Motion reveals hierarchy and guides attention — not decoration |
| Performance | Prefer `transform` and `opacity`; avoid animating `width`/`height` |
| Duration | Hero: 1–3s feel; micro-interactions: 150–300ms |
| Easing | Natural ease-out for entrances; ease-in-out for loops |
| Reduced motion | Always provide static alternative |
| Isolation | Animation logic in dedicated modules/hooks, not inline in content components |

---

## 7. Responsive Design

| Viewport | Design Adaptation |
|----------|-------------------|
| Mobile | Single column; hamburger nav; simplified explorer; full-width CTAs |
| Tablet | Two-column Team/Gallery; scaled explorer stage |
| Desktop | Full hero parallax layers; complete circular explorer; wider typographic scale |

Breakpoints (suggested): 640px, 768px, 1024px, 1280px — align with implementation framework defaults.

---

## 8. Accessibility in Design

- Minimum 4.5:1 contrast for body text
- Focus rings visible and on-brand (not removed)
- Motion alternatives for vestibular sensitivity
- Text remains readable over image overlays (scrims/gradients)
- Interactive targets ≥ 44×44px

---

## 9. Performance-Conscious Design

- Hero: prefer CSS/Canvas/Lottie over heavy autoplay video for MVP
- Images: WebP/AVIF with fallbacks; lazy load below fold
- Fonts: limit to 2 families, 3–4 weights total
- Explorer: limit simultaneous animated elements; virtualize if card count grows

---

## 10. Scalability in Design

- Design tokens for color, spacing, typography — single source for consistency
- Component variants (card, section header, CTA) reusable across pages
- New experiences = new content entries, same card and detail templates
- New offerings = new explorer instance, same interaction pattern

---

## 11. Page-Specific Direction

### Home
Immersive after hero; welcoming; two offering portals as visual focal points.

### About
Long-form editorial; generous margins; pull quotes; optional timeline.

### Team
Portrait grid; consistent aspect ratios; human warmth in photography.

### Gallery
Masonry or uniform grid; hover caption; lazy load.

### Resources
Simple list/card layout; clear external link affordance.

---

## 12. Anti-Patterns (Avoid)

- Cloning reference sites' look and feel
- Generic travel-booking UI patterns (date pickers, price tags, "Book now" for paid checkout)
- Dark patterns, aggressive pop-ups, cookie walls for MVP
- Over-animation that delays access to content
- Hardcoded experience content inside JSX presentation components

---

## 13. Design Deliverables (Future Phase)

Not required for documentation phase, but expected before or during implementation:

- Mood board (Coral Collective original)
- Color and type tokens
- Component wireframes for hero, explorer, detail, nav
- Mobile explorer adaptation spec
- Sample content for one offering end-to-end

---

## 14. Document References

- [Product Requirements](./PRD.md)
- [MVP Scope](./MVP.md)
- [User Flows](./USER_FLOW.md)
