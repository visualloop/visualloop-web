# ⚙️ PROJECT RULES FOR AI DEVELOPMENT ASSISTANT (CURSOR TOOL)

## 🧱 Project Context

**Project Name:** Visual Loop Website  
**Goal:** Build a high-end, visually-driven portfolio site for a videography studio.  
**Delivery:** Single React + TypeScript + Tailwind CSS file using Shadcn/ui components.

---

## 🧠 Technical Mandates (MUST FOLLOW)

### 🧩 Stack
- **Framework:** React  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **UI Library:** Shadcn/ui  

Only these technologies are allowed. Do not import or rely on any other libraries or frameworks.

---


### 📱 Mobile-First Approach (MCP)
- Always **design for mobile screens first**, then scale up for larger devices.  
- Use Tailwind responsive utilities:
  - `sm:` for small screens (≥640px)
  - `md:` for medium screens (≥768px)
  - `lg:` for large screens (≥1024px)
  - `xl:` for extra large screens (≥1280px)
- Prioritize readability, spacing, and performance on mobile devices.

---

### ♿ Accessibility — WCAG 2.1 AA Compliance
To ensure inclusive and accessible design, adhere strictly to the following:

1. **Focus States:**  
   - All interactive elements must have clear visual focus states (e.g., `focus:ring focus:ring-offset-2`).
2. **Contrast Ratios:**  
   - Maintain high contrast between text and background (especially in dark mode).
3. **ARIA Attributes:**  
   - Use correct ARIA roles and labels for custom Shadcn UI components like `Dialog`, `Sheet`, `Button`, and `Tabs`.
4. **Semantic HTML:**  
   - Use `<main>`, `<section>`, `<header>`, `<nav>`, `<footer>`, etc. appropriately.
5. **Keyboard Navigation:**  
   - All controls must be usable via keyboard (Tab, Enter, Space).

---

### 🎨 Aesthetics & Design System
- **Theme:** Dark / Cinematic — deep tones, clean typography, minimal distractions.  
- **Transitions:** Apply subtle animations using:
  ```tsx
  className="transition-all duration-300 ease-in-out"
