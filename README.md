PW 2‑Hour Hackathon – Spatial Product Showcase & Glassmorphism Pricing
A Next.js 14 project built in a 2‑hour PW hackathon featuring an interactive spatial product showcase and an animated glassy pricing section, fully responsive and deployed on Vercel.
​

Live demo: https://pw-2hr-hackathon.vercel.app/
​

Features
Next.js App Router with TypeScript and modern file‑based routing.
​

Spatial product showcase layout highlighting multiple product cards with smooth hover effects and transitions.

Animated glassmorphism pricing section (blurred background, frosted glass panels, subtle gradients and shadows).

Responsive UI optimized for desktop and mobile.

Clean component structure in the src directory and assets served from public.
​

Tech Stack
Next.js 14 (App Router)
​

TypeScript
​

CSS modules / global CSS for styling
​

Deployed on Vercel
​

Getting Started
Clone the repository:

bash
git clone https://github.com/Uttkarshchambiyal/pw-2hr-hackathon.git
cd pw-2hr-hackathon
Install dependencies:

bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
Run the development server:

bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 in your browser to see the app.
​

The main page is implemented in src/app/page.tsx (or app/page.tsx depending on your setup), and hot‑reload is enabled by default.
​

Project Structure
text
pw-2hr-hackathon/
├─ public/           # Static assets (images, icons, etc.)
├─ src/              # Application source code
│  └─ app/           # App Router entry (pages, layout, etc.)
├─ components.json   # UI configuration (e.g. shadcn or design tokens)
├─ next.config.ts    # Next.js configuration
├─ tsconfig.json     # TypeScript configuration
├─ package.json      # Scripts and dependencies
└─ eslint.config.mjs # Linting configuration
You can customize the layout, animations and content by editing the components inside src (especially the main page file and any UI components created for the product and pricing sections).
​

Available Scripts
In addition to dev, you can use:

bash
npm run build   # Production build
npm start       # Start production server (after build)
npm run lint    # Run ESLint checks
Deployment
This project is configured for deployment on Vercel.
​

Push to the main branch and Vercel will automatically build and deploy.

You can also import the repo directly from Vercel’s dashboard and connect it to your GitHub account.
​

For more deployment options and environment configuration, see the official Next.js docs.
​

Hackathon Notes
This project was created under a 2‑hour time limit for a PW hackathon, focusing on:

Rapid ideation and layout design for a visually appealing product showcase.

Implementing glassmorphism, transitions, and basic interactivity within the time constraint.

Clean enough structure to be extended into a full product or landing page later.


