export type NavLink = {
  href: string;
  label: string;
};

export type PricingPlan = {
  name: string;
  monthlyPrice: number;
  summary: string;
  audience: string;
  trialLabel: string;
  featured?: boolean;
  checkoutUrl: string;
  features: string[];
};

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://pillarsmart.com'
).replace(/\/$/, '');

const clientLoginUrl =
  process.env.NEXT_PUBLIC_CLIENT_LOGIN_URL?.trim() ||
  'https://app.pillarsmart.com';

export function isPlaceholderValue(value: string) {
  return value.includes('placeholder') || value.includes('YOUR_');
}

export const siteConfig = {
  name: 'PillarSmart',
  url: siteUrl,
  description:
    'A statically generated lead engine for local businesses, wired to GoHighLevel for nurture, follow-up, reviews, and revenue reporting.',
  clientLoginUrl,
  navLinks: [
    { href: '/pricing/', label: 'Pricing' },
    { href: '/contact/', label: 'Contact' },
    { href: '/blog/', label: 'Blog' },
  ] satisfies NavLink[],
  heroPillars: [
    'Deploy to Cloudflare Pages with global edge caching and preview builds.',
    'Push contact-form submissions straight into your GoHighLevel pipeline.',
    'Rank clean static pages and blog posts without a database dependency.',
  ],
  pricingPlans: [
    {
      name: 'Launch',
      monthlyPrice: 149,
      summary: 'A polished command center for single-location operators.',
      audience: 'Perfect for owner-operators replacing duct-taped follow-up.',
      trialLabel: 'Start 14-Day Trial',
      checkoutUrl:
        process.env.NEXT_PUBLIC_STRIPE_STARTER_URL?.trim() ||
        'https://buy.stripe.com/test_starter_placeholder',
      features: [
        'Lead-capture forms wired to GHL',
        'Missed-call text back workflow',
        'Review request automation',
        'One landing page and one funnel offer',
        'Weekly KPI digest layout',
      ],
    },
    {
      name: 'Momentum',
      monthlyPrice: 297,
      summary: 'The flagship operating system for teams that need throughput.',
      audience: 'Best for growing service businesses with dedicated sales help.',
      trialLabel: 'Start 14-Day Trial',
      featured: true,
      checkoutUrl:
        process.env.NEXT_PUBLIC_STRIPE_GROWTH_URL?.trim() ||
        'https://buy.stripe.com/test_growth_placeholder',
      features: [
        'Everything in Launch',
        'Two-way inbox routing and pipeline stages',
        'Multi-step nurture sequences',
        'Booking reminders and no-show recovery',
        'Campaign dashboards for ads, forms, and close rate',
      ],
    },
    {
      name: 'Authority',
      monthlyPrice: 497,
      summary: 'A multi-channel growth stack for operators scaling locations.',
      audience: 'For teams layering outbound campaigns, reporting, and ops.',
      trialLabel: 'Start 14-Day Trial',
      checkoutUrl:
        process.env.NEXT_PUBLIC_STRIPE_SCALE_URL?.trim() ||
        'https://buy.stripe.com/test_scale_placeholder',
      features: [
        'Everything in Momentum',
        'Multi-location reporting views',
        'Advanced automations for reactivation',
        'AI-assisted lead qualification prompts',
        'White-glove launch checklist and handoff notes',
      ],
    },
  ] satisfies PricingPlan[],
  faqs: [
    {
      question: 'Why use a static Next.js export instead of a hosted app server?',
      answer:
        'A static export keeps hosting costs tiny, reduces moving parts, and still gives you modern UX, metadata, and content management through the filesystem.',
    },
    {
      question: 'How does the contact form work without a backend?',
      answer:
        'The form posts from the browser to your GoHighLevel inbound webhook. If CORS gets in the way, the component falls back to beacon-style delivery while keeping the site serverless.',
    },
    {
      question: 'Can I connect live Stripe and GoHighLevel checkout links later?',
      answer:
        'Yes. The site reads public build-time values so you can replace placeholders with live checkout URLs and rebuild for production.',
    },
  ],
  contactSteps: [
    'A visitor submits the static contact form.',
    'The payload posts directly into your GoHighLevel webhook.',
    'GHL creates the contact, triggers nurture, and routes the lead to the right pipeline.',
  ],
};
