import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowUpRight,
  BadgeDollarSign,
  Bot,
  FileText,
  MessageSquareMore,
  Search,
} from 'lucide-react';

const features = [
  {
    title: 'Static export architecture',
    copy: 'Every core route compiles into static HTML for Cloudflare Pages and its global edge cache. No app server, no runtime DB dependency, and very little operational overhead.',
    icon: ArrowUpRight,
  },
  {
    title: 'GoHighLevel webhook intake',
    copy: 'Contact submissions are validated in the browser and posted to GHL so leads land directly in your workflows and pipeline automations.',
    icon: MessageSquareMore,
  },
  {
    title: 'MDX-style content operation',
    copy: 'Blog posts live in version control, build into static routes, and give the site a clean, durable publishing engine for local SEO.',
    icon: FileText,
  },
  {
    title: 'Pricing built for checkout',
    copy: 'Each pricing card links directly to a Stripe or GoHighLevel checkout URL so your funnel can move from curiosity to trial without extra steps.',
    icon: BadgeDollarSign,
  },
  {
    title: 'Search-ready metadata',
    copy: 'Open Graph tags, canonical metadata, robots, and sitemap generation are all baked into the build output for cleaner indexing.',
    icon: Search,
  },
  {
    title: 'Automation-ready positioning',
    copy: 'The design language reinforces PillarSmart as the system behind the scenes, not just another brochure site with decorative motion.',
    icon: Bot,
  },
];

export function FeaturesGrid() {
  return (
    <section className='shell py-20 md:py-24'>
      <div className='max-w-3xl'>
        <span className='eyebrow'>Platform pillars</span>
        <h2 className='mt-4 text-4xl md:text-5xl'>
          Everything in the build points toward one job: capture, route, and
          convert demand.
        </h2>
      </div>
      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title} className='h-full'>
              <CardHeader>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700'>
                  <Icon className='h-6 w-6' />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className='text-base leading-7 text-slate-700'>
                {feature.copy}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
