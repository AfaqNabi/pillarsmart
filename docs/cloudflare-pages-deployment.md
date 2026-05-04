# Cloudflare Pages and GHL Launch Checklist

This app is designed for a static deployment model on Cloudflare Pages: connect the Git repository, let Pages build the site, and serve the exported `out/` directory from Cloudflare's edge.

## 1. Push the repo to GitHub or GitLab

- Publish the `pillarsmart` repository to GitHub or GitLab
- Keep `main` as the production branch
- Let Cloudflare Pages rebuild from source on every production push

## 2. Create the Pages project

- In Cloudflare, go to `Workers & Pages`
- Create a new Pages project and connect the repository
- Choose the `Next.js (Static HTML Export)` framework preset
- Set the build command to `pnpm build`
- Set the build output directory to `out`

## 3. Configure environment variables in Cloudflare Pages

Add these variables in the Pages dashboard for both Preview and Production as appropriate:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GHL_WEBHOOK_URL`
- `NEXT_PUBLIC_CLIENT_LOGIN_URL`
- `NEXT_PUBLIC_STRIPE_STARTER_URL`
- `NEXT_PUBLIC_STRIPE_GROWTH_URL`
- `NEXT_PUBLIC_STRIPE_SCALE_URL`

Because the app is statically exported, these public values are baked into the build at deploy time.

## 4. Attach custom domains

- Add `pillarsmart.com` as the apex domain in the Pages project
- Add `www.pillarsmart.com` as an additional custom domain
- If the zone is already in Cloudflare, let Pages create the required DNS records
- Keep `app.pillarsmart.com` pointed at your GoHighLevel white-label target with a separate CNAME

## 5. Understand the deployment flow

- Production deploys come from Cloudflare Pages Git integration
- Preview deployments are created by Pages for branches and pull requests
- The GitHub Action in `.github/workflows/verify.yml` is only for lint/build verification, not deployment

## 6. Optional Pages-specific hardening

- `public/_headers` adds security headers to static asset responses
- Preview deployments on `*.pages.dev` are already `noindex` by default
- If you want your production `*.pages.dev` hostname redirected to the custom domain, configure a Bulk Redirect in Cloudflare
- If you later need redirect rules inside the static site itself, add a `public/_redirects` file and let Pages copy it into the final output

## 7. Recommended preflight checks

- Run `pnpm lint`
- Run `pnpm build`
- Confirm `out/` contains the expected static routes
- Submit the contact form against a test GHL webhook
- Click each pricing CTA and confirm it lands on the correct checkout
- In Cloudflare Pages, verify that Production and Preview builds both complete successfully

## 8. Known zero-backend caveat

The contact form intentionally posts from the browser to GoHighLevel. If your GHL webhook blocks browser-origin traffic, the component falls back to beacon-style delivery. If you ever need stricter delivery guarantees, the clean upgrade path is a small proxy endpoint on Workers or another edge function layer.
