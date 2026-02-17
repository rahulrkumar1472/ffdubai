# FAT FREEZING (Minimal EN/AR Next.js Build)

Simple production-ready App Router website with:
- `/en` and `/ar` home pages
- `/en/book` and `/ar/book` booking pages
- Embedded two-step booking form
- Prisma + SQLite booking persistence
- Optional Resend email confirmation fallback

## Environment
Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Required values:
- `DATABASE_URL="file:./dev.db"`
- `NEXT_PUBLIC_SITE_URL="http://localhost:3000"`

Optional values:
- `RESEND_API_KEY`
- `MAIL_FROM` (defaults to `bookings@fatfreezing.ae`)

## Run instructions
```bash
npm install
npm run prisma:migrate
npm run dev
```

Then open:
- http://localhost:3000/en
- http://localhost:3000/ar
- http://localhost:3000/en/book
- http://localhost:3000/ar/book

## Notes
- Root `/` redirects to `/en` via middleware.
- No `next-intl` is used.
- Arabic is rendered with RTL direction.
- Booking API validates required fields, email format, date format, and time slots (12:00–20:00, 30-min increments).
- If `RESEND_API_KEY` is missing, email is logged to console and booking still succeeds.
