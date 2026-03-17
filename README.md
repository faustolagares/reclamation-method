# Reclamation Method

Website for **Reclamation Method by Karita Cassia** — a neuroscience-informed framework designed to restore women to physiological stability, clarity, and sustainable strength.

## About

The Reclamation Method integrates four core disciplines into one cohesive system built on science:

- **Nervous System Regulation** — Every protocol begins with the nervous system. When the body feels safe, everything else becomes possible.
- **Female Nutrition Architecture (FNA)** — A proprietary nutritional system built entirely around female physiology, hormonal cycles, and metabolic function.
- **Rhythm, Movement & Sweat** — Supporting vitality through natural rhythms, intentional movement, and physical exertion that restores rather than depletes.
- **Sustainable Vitality Practices** — Long-term habits around rest, nourishment, environment, and lifestyle that allow health to compound over time.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **AI:** [Google Gemini](https://ai.google.dev/) via `@google/genai`
- **Animations:** [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Bundler:** Turbopack

## Getting Started

### Prerequisites

- Node.js 20+
- A [Gemini API key](https://aistudio.google.com/apikey)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/faustolagares/reclamation-method.git
   cd reclamation-method
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file at the root and add your Gemini API key:
   ```bash
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
reclamation-method/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── not-found.tsx    # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── next.config.ts       # Next.js configuration
└── .env.local           # Environment variables (not committed)
```

## License

Private. All rights reserved © 2026 Reclamation Method.
