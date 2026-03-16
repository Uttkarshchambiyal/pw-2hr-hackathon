<!-- Banner -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6EE7F7,100:A78BFA&height=200&section=header&text=PW%202-Hour%20Hackathon&fontSize=48&fontColor=fff&fontAlignY=38&desc=Spatial%20Product%20Showcase%20%E2%80%A2%20Glassmorphism%20Pricing%20%E2%80%A2%20Next.js%2014&descAlignY=58&descSize=16" width="100%" />

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://pw-2hr-hackathon.vercel.app/)
[![Status](https://img.shields.io/badge/Status-Completed%20%E2%9C%94-22c55e?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge)](LICENSE)

<br/>

**[🌐 Live Demo](https://pw-2hr-hackathon.vercel.app/)** &nbsp;•&nbsp;
**[⚙️ Getting Started](#%EF%B8%8F-getting-started)** &nbsp;•&nbsp;
**[📁 Structure](#-project-structure)** &nbsp;•&nbsp;
**[🛠 Tech Stack](#-tech-stack)**

</div>

---

## 🎯 Overview

> Built under a **2-hour hard deadline** — from `npx create-next-app` to live Vercel deployment.

**PW 2-Hour Hackathon** is a visually striking Next.js 14 landing page that pushes what's possible in a tight sprint. It features a **spatial 3D-inspired product showcase** with layered card depth and smooth hover micro-interactions, paired with a **frosted-glass pricing section** that makes the UI feel modern, premium, and alive.

No heavy backend. No CMS. Just clean, intentional front-end code shipped fast.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🧊 **Glassmorphism Pricing** | Frosted glass panels, blurred backgrounds, soft gradients & shadows |
| 🌌 **Spatial Product Layout** | Layered 3D-inspired cards with depth, scale & hover transitions |
| 📱 **Fully Responsive** | Fluid layout across desktop, tablet & mobile |
| ⚡ **Next.js App Router** | File-based routing, RSC, fast page loads |
| 🎨 **Micro-interactions** | Animated buttons, CTA elements & card hover effects |
| 🚀 **Vercel Deployed** | CI/CD via Vercel — push to `main` = instant deploy |

---

## 🛠 Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | CSS Modules + Global CSS |
| **Deployment** | Vercel |
| **Package Manager** | npm / yarn / pnpm / bun |

</div>

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- npm / yarn / pnpm / bun

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Uttkarshchambiyal/pw-2hr-hackathon.git
cd pw-2hr-hackathon

# 2. Install dependencies
npm install
# or
yarn install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Hot reload is enabled by default.

---

## 📁 Project Structure

```
pw-2hr-hackathon/
├── public/                  # Static assets (images, icons, favicons)
├── src/
│   └── app/                 # Next.js App Router
│       ├── layout.tsx        # Root layout & metadata
│       ├── page.tsx          # Main landing page
│       └── globals.css       # Global styles & CSS variables
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Deployment

This project is deployed on **[Vercel](https://vercel.com)** using the official Next.js integration.

```
Push to main → Vercel detects change → Build & Deploy → Live in ~30s
```

🔗 **Production URL:** [https://pw-2hr-hackathon.vercel.app/](https://pw-2hr-hackathon.vercel.app/)

To deploy your own fork:
1. Fork this repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your forked repo
4. Click **Deploy** — done!

---

## 🧠 Challenges & Learnings

- ⏱️ **Hard 2-hour constraint** from init to production deployment — forced ruthless prioritisation
- 🎨 Designing **glassmorphism** purely in CSS without any UI library
- 🌌 Crafting a **spatial depth illusion** using transforms, z-index, and box-shadow layers
- ⚡ Leveraging **Next.js App Router** for clean, scalable structure even in a sprint

---

## 📣 Contributing

PRs and issues are always welcome! If you have ideas for animations, layout improvements, or new sections:

1. Fork the repo
2. Create your feature branch: `git checkout -b feat/amazing-idea`
3. Commit your changes: `git commit -m 'feat: add amazing idea'`
4. Push to the branch: `git push origin feat/amazing-idea`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify and distribute.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:A78BFA,100:6EE7F7&height=120&section=footer" width="100%" />

**Built with ❤️ by [Uttkarsh Chambiyal](https://github.com/Uttkarshchambiyal)**

⭐ Star this repo if you found it helpful!

</div>
