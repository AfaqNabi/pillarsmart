# PillarSmart

PillarSmart is a statically generated Next.js marketing site built for Cloudflare Pages hosting, direct GoHighLevel lead routing, and SEO-friendly content publishing from local `.mdx` files.

## Stack

- Next.js App Router with `output: 'export'`
- TypeScript + Tailwind CSS v4
- shadcn-style UI primitives
- `react-hook-form` + `zod` contact form validation
- File-based blog content in `content/blog`
- `pnpm` for package management

## Local development

```bash
pnpm install
pnpm dev
```

The production export is generated with:

```bash
pnpm build
```

The build output lands in `out/`, which matches the Cloudflare Pages static export output directory.

## Environment variables

Copy `.env.example` and replace the placeholders before launch:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GHL_WEBHOOK_URL`
- `NEXT_PUBLIC_CLIENT_LOGIN_URL`
- `NEXT_PUBLIC_STRIPE_STARTER_URL`
- `NEXT_PUBLIC_STRIPE_GROWTH_URL`
- `NEXT_PUBLIC_STRIPE_SCALE_URL`

Because this app is statically exported, public environment values are baked in at build time.

## Content workflow

- Add posts to `content/blog/*.mdx`
- Include frontmatter for `title`, `description`, `date`, `author`, and `category`
- Rebuild the site to publish new articles

## Deployment

Cloudflare Pages should handle production deployment through Git integration. Connect the repository in the Cloudflare dashboard, choose the `Next.js (Static HTML Export)` preset, set the production branch to `main`, and use `out` as the build output directory.

The GitHub workflow in [verify.yml](/Users/afaqnabi/Desktop/tmp/pillarsmart/.github/workflows/verify.yml) is now just a verification pass for linting and static builds.

Detailed setup steps for Cloudflare Pages, DNS, and GoHighLevel live in [cloudflare-pages-deployment.md](/Users/afaqnabi/Desktop/tmp/pillarsmart/docs/cloudflare-pages-deployment.md).
