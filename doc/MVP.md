# 🚀 Visual Loop — MVP Definition

## 🎯 MVP Objective
Deliver a **functional, cinematic marketing website** for Visual Loop that highlights the portfolio, communicates expertise, and allows potential clients to make contact — using **React + TypeScript + ShadCN + TailwindCSS** under the **MCP** structure.

---

## ✅ MVP Features

### 1. Core Pages
- **Home** – Hero video banner, tagline, and CTAs  
- **About** – Studio background and creative philosophy  
- **Portfolio** – Grid view with video embeds (10+ projects)  
- **Services** – Pre-production, shooting, post-production details  
- **Contact** – Simple form (frontend only) + social links  

### 2. Components
- Responsive **Navbar** and **Footer**  
- **Card**, **Button**, and **Modal** from ShadCN UI  
- Custom **Video Player** or embedded YouTube/Vimeo support  
- **SEO Head** component for meta and OG tags  

### 3. Accessibility
- WCAG 2.1 AA compliance (focus states, contrast, alt text)
- Keyboard navigable UI  
- Semantic HTML structure  

### 4. Responsiveness
- Mobile-first Tailwind layout  
- Smooth scaling on tablet and desktop  
- Optimized media queries for video and image grids  

---

## 🚫 MVP Exclusions (Phase 2 / v2)
- CMS (e.g., Sanity, Strapi, Contentful)  
- Blog / Articles  
- Multi-language support  
- Analytics integration  
- Admin dashboard or client login  
- Advanced animations (beyond Framer basics)

---

## 🧱 Suggested Folder Structure
```bash
src/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── cards/
│   └── forms/
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── lib/
├── styles/
│   └── globals.css
├── types/
│   └── project.d.ts
└── utils/