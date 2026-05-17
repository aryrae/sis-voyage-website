# SIS Voyage — public website (sisvoyage.com)

Production landing page for SIS Voyage. Next.js 15 + React 19 + Tailwind v4.

## Local dev

```bash
cd "/Users/ary/Library/Mobile Documents/com~apple~CloudDocs/Travel Agency/website"
npm install
npm run dev
# → http://localhost:3040
```

Port 3040 keeps it clear of the cockpit (3030).

## Structure

```
website/
├── app/
│   ├── layout.tsx        ← root layout, SEO metadata, fonts
│   ├── page.tsx          ← single-page landing (hero, what-we-do, why, FAQ, inquiry)
│   ├── inquiry-form.tsx  ← client-side inquiry form (mailto: for now)
│   └── globals.css       ← design tokens (matches cockpit cream/amber/ink palette)
└── public/               ← static assets (favicon + OG image — add later)
```

## How the inquiry form works (current state)

Form posts open the user's email client with a pre-filled mailto: to
`hello@sisvoyage.com` (which forwards to your Gmail via Porkbun). Works on day 1,
no API keys, no backend, no spam vector — but UX requires the user to have a
default mail client configured.

## Upgrade path: real form submission via Resend

When you're ready for a proper backend form:

1. Sign up at https://resend.com (free tier = 3,000 emails/month, plenty)
2. Verify `sisvoyage.com` domain in Resend (adds DNS records via Porkbun)
3. Get an API key
4. Create `app/api/inquire/route.ts` (boilerplate below)
5. Update `inquiry-form.tsx` to `fetch("/api/inquire", ...)` instead of mailto
6. Add `RESEND_API_KEY` to Vercel project env vars

API route boilerplate (drop-in when ready):

```ts
// app/api/inquire/route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();
  await resend.emails.send({
    from: "SIS Voyage Inquiries <inquiries@sisvoyage.com>",
    to: "hello@sisvoyage.com",
    subject: `New inquiry — ${data.trip} — ${data.name}`,
    text: JSON.stringify(data, null, 2),
    replyTo: data.email,
  });
  return Response.json({ ok: true });
}
```

Then `npm install resend`.

## Deploying to Vercel (first time)

1. **Push to a Git repo** (GitHub easiest; Vercel auto-syncs):
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial SIS Voyage website"
   # Create a new private GitHub repo (sis-voyage-website)
   git remote add origin https://github.com/<your-handle>/sis-voyage-website.git
   git push -u origin main
   ```

2. **Sign in to Vercel** (https://vercel.com) with the GitHub account
   - Click "Add New → Project"
   - Import `sis-voyage-website`
   - Framework preset: Next.js (auto-detected)
   - Click Deploy

3. **Connect the domain** `sisvoyage.com`:
   - In the Vercel project → Settings → Domains → Add `sisvoyage.com` + `www.sisvoyage.com`
   - Vercel will show 2 DNS records to add
   - In Porkbun (https://porkbun.com) → Manage `sisvoyage.com` → DNS Records:
     - Add the **A record** for `@` pointing to `76.76.21.21` (Vercel's IP)
     - Add the **CNAME** for `www` pointing to `cname.vercel-dns.com`
     - **Do NOT delete the MX records** — those keep `hello@sisvoyage.com` forwarding working
   - Wait 5-30 min for DNS propagation; Vercel will auto-issue an SSL cert

4. **Verify** by hitting https://sisvoyage.com in a browser

### After-deploy checklist

- [ ] Submit the contact form once; verify the mailto opens and you receive a test message at the Gmail inbox
- [ ] Open the site on mobile + desktop; check the aurora background animates and forms work
- [ ] Add Vercel Analytics if you want traffic data (free, 1-click toggle in Vercel project settings)
- [ ] Submit `sisvoyage.com` to Google Search Console for indexing
- [ ] (Later) Add a favicon + Open Graph image to `public/`

## Subsequent deploys

Any `git push` to `main` auto-deploys to production. Preview deploys per PR.

## Updating content

All editable content is in `app/page.tsx` (sections + copy) and `app/inquiry-form.tsx`
(trip type dropdown). Edit, commit, push — Vercel handles the rest.

## SEO baseline

- `app/layout.tsx` has metadata + OG tags
- Single-page format means Google indexes everything together (good for a small site)
- Internal links use `#anchors`, smooth scroll enabled in `globals.css`
- Mobile-responsive (Tailwind breakpoints)

## What this site does NOT do (intentional MVP scope)

- No CMS — content edits require code changes (fine for a 1-page site)
- No multi-language pages yet (single-page EN with FR reply preference toggle in form)
- No blog / case studies / past-trip gallery (add as material accumulates)
- No live chat (the Cockpit chat widget will sit here eventually)
- No payment processing (bookings flow through Fora, not the site)
