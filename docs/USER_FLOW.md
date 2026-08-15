# User Flow — Coral Collective Website

## 1. Flow Overview

This document describes complete user journeys through the Coral Collective website, with emphasis on the critical conversion path from entry to contact.

---

## 2. Critical Flow — Entry to Contact

The primary journey every MVP visitor should be able to complete:

### Step-by-Step

| Step | User Action | System Response | Page / State |
|------|-------------|-----------------|--------------|
| **1** | User enters the website (opens URL, follows link) | Site loads; immersive hero animation appears | Hero entry |
| **2** | — | Hero establishes brand mood: coastal, natural, premium, story-driven | Hero entry |
| **3** | User scrolls (or uses scroll alternative) | Hero visuals transform in response to scroll progress | Hero entry → transition |
| **4** | User continues scrolling | Hero transitions smoothly into the Home page layout | Home |
| **5** | User reads Home content | Home introduces Coral Collective — Tulunadu storytelling, heritage, cuisine, traditions | Home |
| **6** | User scans offering section | Two main offerings displayed: **Café Collective** and **Half-Day Experience** | Home |
| **7** | User selects one offering (tap/click) | Navigation to that offering's explorer view | Offering explorer |
| **8** | — | Selected offering opens a **rotating circular scroll experience** | Offering explorer |
| **9** | User scrolls through the explorer | Experience cards move along a circular path; one card emphasized as active | Offering explorer |
| **10** | User selects one card (active or focused card) | Experience detail view opens | Experience detail |
| **11** | User reads experience information | Detail shows title, description, imagery, highlights, format/duration if applicable | Experience detail |
| **12** | User decides to enquire | Enquiry/contact CTA visible and actionable | Experience detail |
| **13** | User taps contact/enquire | User is directed to organization's contact mechanism | External / contact |
| **14** | — | e.g. WhatsApp opens with optional pre-filled message about the selected experience | WhatsApp / email |
| **15** | — | **No online payment is performed on the website** | — |

### Critical Flow Diagram

```
┌─────────────┐
│  Enter URL  │
└──────┬──────┘
       ▼
┌─────────────┐
│ Hero Entry  │  immersive animation
└──────┬──────┘
       │ scroll
       ▼
┌─────────────┐
│    Home     │  intro + 2 offerings
└──────┬──────┘
       │ select offering
       ▼
┌─────────────┐
│  Circular   │  scroll-driven card rotation
│  Explorer   │
└──────┬──────┘
       │ select card
       ▼
┌─────────────┐
│  Experience │  details + CTA
│   Detail    │
└──────┬──────┘
       │ enquire
       ▼
┌─────────────┐
│  WhatsApp / │  no payment
│   Contact   │
└─────────────┘
```

---

## 3. Alternate Paths Within Critical Flow

### 3.1 Skip or Reduce Hero

| Condition | Flow |
|-----------|------|
| `prefers-reduced-motion: reduce` | Shortened or static hero; faster path to Home |
| User activates skip control (if provided) | Jump directly to Home |
| Return visit (implementation TBD) | May land on Home without full hero replay |

### 3.2 Navigation During Explorer

| User Action | Result |
|-------------|--------|
| Back from explorer | Return to Home |
| Back from detail | Return to explorer (same offering) |
| Global nav click | Navigate to selected page; explorer state not preserved unless implemented |

### 3.3 Contact from Non-Detail Pages

User may reach contact without completing full explorer flow:

- Home footer or header contact link → WhatsApp / email
- About page CTA → contact
- Experience detail remains primary conversion point with context-rich enquiry

---

## 4. Navigation Flow — Supporting Pages

Global navigation is available from all main pages:

**Home | About | Team | Gallery | Resources**

### 4.1 About Flow

```
Any page → click "About" in nav → About page
```

**About page journey:**
1. User lands on About via nav or direct link
2. User reads mission, origin story, Tulunadu cultural context
3. User may navigate to Team, Gallery, Resources, or Home via nav
4. User may click contact CTA → WhatsApp / email
5. User may click offering teaser (optional) → Home or offering explorer

### 4.2 Team Flow

```
Any page → click "Team" in nav → Team page
```

**Team page journey:**
1. User lands on Team page
2. User browses team member cards (photo, name, role, bio)
3. User navigates elsewhere via global nav or returns to Home
4. No authentication or profile editing

### 4.3 Gallery Flow

```
Any page → click "Gallery" in nav → Gallery page
```

**Gallery page journey:**
1. User lands on Gallery page
2. User scrolls through curated imagery (lazy-loaded)
3. User may open lightbox/enlarged view (if implemented)
4. User navigates to other sections via nav
5. Optional: image caption links to related experience (post-MVP enhancement)

### 4.4 Resources Flow

```
Any page → click "Resources" in nav → Resources page
```

**Resources page journey:**
1. User lands on Resources page
2. User browses curated links, references, or downloads
3. External links open in new tab with appropriate `rel` attributes
4. User returns via nav to Home or other sections

---

## 5. Combined Site Map Flow

```
                    ┌──────────┐
                    │   Hero   │
                    └────┬─────┘
                         │ scroll
                         ▼
    ┌──────────────────────────────────────────────┐
    │                     HOME                      │
    │  ┌─────────────────┐  ┌──────────────────┐ │
    │  │ Café Collective │  │ Half-Day Experience│ │
    │  └────────┬────────┘  └─────────┬────────┘ │
    └───────────┼─────────────────────┼──────────┘
                │                     │
                ▼                     ▼
         ┌──────────────┐       ┌──────────────┐
         │  Explorer    │       │  Explorer    │
         │  (Café)      │       │  (Half-Day)  │
         └──────┬───────┘       └──────┬───────┘
                │ select card          │
                ▼                      ▼
         ┌──────────────┐       ┌──────────────┐
         │  Experience  │       │  Experience  │
         │  Detail      │       │  Detail      │
         └──────┬───────┘       └──────┬───────┘
                │ enquire            │
                └──────────┬─────────┘
                           ▼
                    ┌──────────────┐
                    │   Contact    │
                    │  (WhatsApp)  │
                    └──────────────┘

    Global Nav from any page:
    ┌────────┬────────┬────────┬───────────┐
    │ About  │  Team  │ Gallery│ Resources │
    └────────┴────────┴────────┴───────────┘
```

---

## 6. Entry Points

| Entry Point | Landing Behavior |
|-------------|------------------|
| Direct URL (`/`) | Hero → Home flow |
| Deep link to `/about`, `/team`, etc. | Supporting page directly; nav available |
| Deep link to `/offerings/[slug]` | Offering explorer (hero may be bypassed) |
| Deep link to `/experiences/[slug]` | Experience detail directly |
| Shared WhatsApp / social link | Depends on shared URL |

---

## 7. Exit Points

| Exit Point | Description |
|------------|-------------|
| WhatsApp | Primary conversion exit — user continues conversation off-site |
| Email | Secondary contact exit |
| External resources links | User leaves to third-party content |
| Browser close | No account; no data persisted on site for MVP |

---

## 8. Error & Edge Flows

| Scenario | Expected Behavior |
|----------|-------------------|
| Invalid route | Friendly 404 with link to Home |
| Missing experience slug | 404 or redirect to Home |
| Slow network | Progressive loading; no blank unstyled flash |
| JavaScript disabled | Graceful degradation message (optional) or minimal static fallback |
| Reduced motion | Static/simplified hero and explorer |

---

## 9. What Does Not Happen

Throughout all flows:

- ❌ No login or signup
- ❌ No payment or checkout
- ❌ No booking confirmation on-site
- ❌ No account creation
- ❌ No admin actions from public UI

---

## 10. Document References

- [Product Requirements](./PRD.md)
- [MVP Scope](./MVP.md)
- [Design Direction](./DESIGN_DIRECTION.md)
