# Minimum Viable Product — Coral Collective Website

## 1. MVP Objective

Deliver a working, deployable website that demonstrates Coral Collective's experiential storytelling and guides visitors from first impression through offering exploration to direct contact — without payment, authentication, or unnecessary backend infrastructure.

---

## 2. MVP Success Path

The MVP **must** successfully demonstrate this end-to-end flow:

```
Enter
  → hero scroll transition
  → Home
  → select offering (Café Collective or Half-Day Experience)
  → rotating circular experience explorer
  → select experience
  → view details
  → contact Coral Collective
```

If any step in this chain is broken, the MVP is not complete.

---

## 3. In Scope

### 3.1 Core Experience Flow

| Step | Deliverable |
|------|-------------|
| Entry | Immersive hero on website load |
| Scroll transition | Hero transforms via scroll into Home layout |
| Home | Brand introduction + two offering selectors |
| Offering explorer | Rotating circular scroll of experience cards per offering |
| Experience selection | Tap/click active card → detail view |
| Experience detail | Title, description, imagery, highlights, enquiry CTA |
| Contact | WhatsApp link, email, or minimal enquiry handoff |

### 3.2 Pages (All Required for MVP)

| Page | MVP Requirement |
|------|-----------------|
| **Home** | Hero transition destination; offering entry points; nav |
| **About** | Mission, Tulunadu cultural context, collective story |
| **Team** | Team member listing with name, role, photo, bio |
| **Gallery** | Curated image grid with lazy loading |
| **Resources** | Curated links and/or downloadable references |

### 3.3 Navigation

- Global nav: **Home | About | Team | Gallery | Resources**
- Nav accessible on all pages (except possibly during initial hero beat)
- Mobile-responsive menu

### 3.4 Content

- At least one experience card per offering (minimum 2 total; more preferred for demo quality)
- Placeholder or real copy for About, Team, Gallery, Resources
- Static content files (JSON/MD/TS) — no CMS

### 3.5 Technical Baseline

- React + TypeScript frontend
- Content/data separated from presentation components
- Animation logic in isolated modules
- Responsive layouts: mobile, tablet, desktop
- `prefers-reduced-motion` support for hero and explorer
- Static site generation or equivalent deployable output
- No server, database, or API required to run in production

### 3.6 Quality Bar

- Builds without errors
- Typecheck passes
- Core flow manually testable on mobile and desktop
- Accessible keyboard navigation for nav and CTAs
- Performance-conscious asset loading (no unoptimized full-res hero video by default)

---

## 4. Out of Scope for MVP

The following are **explicitly excluded**. Do not implement, scaffold, or design for these in the MVP:

| Item | Notes |
|------|-------|
| **Payments** | No Stripe, Razorpay, or any payment gateway |
| **Checkout** | No cart, order summary, or purchase confirmation |
| **Authentication** | No login, signup, OAuth, or session management |
| **User accounts** | No profiles, saved experiences, or preferences storage |
| **Admin dashboard** | No internal CMS UI for editing content |
| **Unnecessary backend / database infrastructure** | No Express/FastAPI server, PostgreSQL, MongoDB, etc. unless a minimal serverless function is strictly required for form email — prefer static + external links |
| **Complex CMS** | No Sanity, Contentful, Strapi, or WordPress integration |

Also out of scope (unless later prioritized):

- Online booking with calendar availability
- Multi-language / i18n
- Analytics dashboard
- Blog with commenting
- Search across site content
- Newsletter subscription backend

---

## 5. MVP Feature Checklist

Use this checklist to validate MVP completion:

### Entry & Home
- [ ] Hero displays on first load
- [ ] Scroll drives hero → Home transition
- [ ] Home introduces Coral Collective
- [ ] Café Collective and Half-Day Experience are selectable
- [ ] Global navigation works

### Offering Explorer
- [ ] Selecting an offering opens circular scroll explorer
- [ ] Scroll moves cards along circular path
- [ ] Active card is visually emphasized
- [ ] Card selection opens detail view
- [ ] Back navigation to explorer and Home works

### Experience Detail & Contact
- [ ] Detail view shows experience information
- [ ] Enquiry/contact CTA is prominent
- [ ] Contact opens WhatsApp (or agreed mechanism)
- [ ] No payment or login prompts anywhere

### Supporting Pages
- [ ] About page live and linked from nav
- [ ] Team page live and linked from nav
- [ ] Gallery page live and linked from nav
- [ ] Resources page live and linked from nav

### Cross-Cutting
- [ ] Responsive on mobile and desktop
- [ ] Reduced motion alternative exists
- [ ] Content driven from data files, not hardcoded in components
- [ ] Site deploys as static or edge-hosted output

---

## 6. MVP Content Minimums

| Content Type | Minimum |
|--------------|---------|
| Offerings | 2 (Café Collective, Half-Day Experience) |
| Experiences | 1+ per offering |
| Team members | 1+ (placeholder acceptable) |
| Gallery items | 3+ images |
| Resources | 1+ link or reference |
| About | 1 coherent narrative section |

---

## 7. Definition of Done

MVP is **done** when:

1. The success path (Section 2) works end-to-end on production build
2. All five nav destinations render meaningful content
3. Out-of-scope items (Section 4) are absent
4. Documentation in `docs/` remains accurate to what was built
5. Build and typecheck pass; core flow verified manually

---

## 8. Post-MVP (Future, Not Now)

- Headless CMS for non-developer content updates
- Richer animation polish and sound design
- Booking integration
- Expanded experience catalog
- Analytics
- SEO content expansion

---

## 9. Document References

- [Product Requirements](./PRD.md)
- [User Flows](./USER_FLOW.md)
- [Design Direction](./DESIGN_DIRECTION.md)
