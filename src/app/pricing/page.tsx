import { FaqList } from '@/components/faq-list';
import { PricingTable } from '@/components/pricing-table';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'See the PillarSmart plan lineup, direct trial CTAs, and what ships with each GoHighLevel-backed setup.',
};

const valueCards = [
  'Static pages are pre-rendered for speed, so there is no production Node server to host or patch.',
  'Checkout buttons point directly to your Stripe or GoHighLevel payment links for lower-friction trial starts.',
  'The site structure leaves room for growth: blog, contact capture, SEO metadata, and Cloudflare Pages deployment artifacts are already wired in.',
];

export default function PricingPage() {
  return (
    <div className='shell py-16 md:py-20'>
      <div className='max-w-3xl'>
        <span className='eyebrow'>Pricing and rollout</span>
        <h1 className='mt-4 text-5xl md:text-6xl'>
          Pick the PillarSmart tier that matches your sales tempo.
        </h1>
        <p className='mt-5 text-lg leading-8 text-slate-700'>
          These plans are written to sell a white-labeled software experience
          without overcomplicating the front-end. Click-throughs go straight
          toward trial checkout, while ops stay behind the curtain in
          GoHighLevel.
        </p>
      </div>
      <div className='mt-10 grid gap-4 md:grid-cols-3'>
        {valueCards.map((value) => (
          <div
            key={value}
            className='rounded-[26px] border border-white/80 bg-white/70 px-5 py-5 text-base leading-7 text-slate-700 shadow-sm'
          >
            {value}
          </div>
        ))}
      </div>
      <section className='py-16 md:py-20'>
        <PricingTable />
      </section>
      <section className='grid gap-10 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
        <div>
          <span className='eyebrow'>Frequently asked questions</span>
          <h2 className='mt-4 text-4xl md:text-5xl'>
            Clear answers for launch-minded teams.
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-700'>
            The build is intentionally simple: static export on Cloudflare Pages,
            lead routing into GHL, and pricing designed to move straight to
            checkout.
          </p>
          <div className='mt-8'>
            <Button asChild size='lg'>
              <Link href='/contact/'>Map out the deployment</Link>
            </Button>
          </div>
        </div>
        <FaqList />
      </section>
    </div>
  );
}
