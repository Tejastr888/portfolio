# Tejas R — Backend Engineer Portfolio

> Opinionated, minimal, fast personal website and architecture case studies for **Tejas R**, Java backend engineer based in Bengaluru.
> Live URL: [tejastr888.github.io/portfolio](https://tejastr888.github.io/portfolio/)

---

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v3 (monochrome palette + calm blue accent)
- **Routing**: React Router v7 (`/` and `/work/:slug` deep-dive case studies)
- **Animation**: `motion` with strict `prefers-reduced-motion` compliance
- **Typography**: Inter (Body) + JetBrains Mono (Code/Metrics)
- **CI/CD**: GitHub Actions deploying to GitHub Pages + scheduled stats cron

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Typecheck and production bundle build
npm run build

# Preview production build locally
npm run preview

# Update GitHub and LeetCode stats
npm run fetch-stats
```

---

## Architecture Case Studies Featured

1. **Storage-Agnostic File Management API** — Multi-cloud abstraction (S3 vs OneDrive) with Strategy, Factory, and Adapter patterns.
2. **Health Insurance Member Portal & Gateway** — OHI core system integration with tiered MongoDB read-through caching and Resilience4j bulkheads.
3. **Event-Driven Order & Inventory Platform** — Zero-oversell distributed inventory ledger with Redis atomic Lua reservations and Kafka transactional outbox.
4. **Sports Club & Court Booking Microservices** — Distributed microservices with token-bucket rate limiting and asynchronous reservation hold timeouts.
