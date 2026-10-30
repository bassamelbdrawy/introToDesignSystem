# SE104 · Introduction to Design Systems

**Presented by:** Bassam Elbadrawy  
**App demo:** Same student check-in screen, built two ways

---

## Thesis

A design system turns UI from scattered decisions into a shared language — so products stay consistent and teams can change them without starting over.

---

## Session flow (3 parts)

### Part 1 — The problem (Bad practise)

**Goal:** Make the pain feel real before offering the solution.

1. Show the Figma **Bad practise** frame  
   Drawn by hand. No tokens. No components. No auto layout rules shared with code.

2. Open `BadPractiseScreen.tsx`  
   One big screen file. Colors, spacing, fonts, and layout are hardcoded in place.

3. Call out the risks
   - The same button can look slightly different on every screen
   - The same color is copied in many places (`#1C1A19`, `#ECE7E0`, etc.)
   - There is no single source of truth

4. Raise the request that breaks everything
   - “Add light / dark theme”
   - “Change button variants”
   - “Update spacing” or “rebrand the product”

5. Punchline  
   Without a system, this becomes a rewrite — not a change.

---

### Part 2 — The design system (Good practise)

**Goal:** Introduce the system as the fix, not as theory.

1. **Tokens first**  
   Color, spacing, radius, and typography live in one place (`theme/tokens.ts`).

2. **Components second**  
   Reusable pieces with variants:
   - `Avatar` → `type="Circle" | "Square"`
   - `Button` → `type="Primary" | "Secondary" | "Tertiary"`
   - `Disclaimer` → `type="Dotted" | "None"`
   - `Header`, `Title`, and home components follow the same idea

3. **Screens last**  
   Screens compose components instead of reinventing UI.  
   See `GoodPractiseScreen.tsx`.

4. Live demo
   - Same check-in UI as the bad screen
   - Built from shared tokens and components
   - Theme switch in the header works because colors come from one place

5. Key proof  
   Change one token or one component → many places update safely.

---

### Part 3 — Impact on the development process

**Goal:** Connect the demo to why teams should care.

#### From this session’s POV
- **Scalability** — the product can grow without rewriting UI every time
- **Maintainability** — changes stay local, predictable, and cheap

#### Expanded presentation points

1. **Consistency**  
   Same product language across screens. Less “almost the same” UI.

2. **Speed**  
   New screens are assembled from known pieces, not redesigned from scratch.

3. **Safer change**  
   Theme, rebrand, or variant updates happen in one place instead of hunting through files.

4. **Collaboration**  
   Designers and developers share the same vocabulary: tokens, variants, components.

5. **Lower long-term cost**  
   The first screen may take a bit longer. The 10th screen is much cheaper.

---

## Slide-by-slide speaking script

### Slide 1 — Title
> SE104 · UI/UX  
> Introduction to Design Systems  
> Introduced by Bassam Elbadrawy

### Slide 2 — What we will compare
> Same student check-in. Two ways to build it.  
> One without a system. One with tokens and components.

### Slide 3 — Bad practise in Figma
> This looks fine visually.  
> But nothing here is reusable as a shared language for developers.

### Slide 4 — Bad practise in code
> Everything is hardcoded in one screen.  
> It works… until the product needs to change.

### Slide 5 — The request that breaks it
> Add dark mode. Change button variants. Rebrand.  
> Without tokens and components, every screen becomes a manual edit.

### Slide 6 — What is a design system?
> Tokens first. Components second. Screens last.  
> Shared rules that both design and code can follow.

### Slide 7 — Good practise demo
> Same UI, built from the system.  
> Watch the theme switch: one color system updates the whole screen.

### Slide 8 — Why this matters
> Scalability and maintainability.  
> Faster delivery, safer updates, better consistency, lower long-term cost.

### Slide 9 — Closing
> A design system is not extra work for one screen.  
> It is less work for every screen that comes after.

---

## Demo checklist in the app

1. Open **Home** → explain the two paths
2. Open **Bad practise** → show hardcoded values and no theme support
3. Open **Good practise** → show components + tokens
4. Tap **Dark / Light** → show themeing through one shared system
5. Return to Home → close with scalability and maintainability

---

## Key takeaway

Design systems improve the development process because they make UI **scalable** and **maintainable**: teams can grow the product faster, keep it consistent, and change it safely.
