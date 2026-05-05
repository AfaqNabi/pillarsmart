import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/site';
import { Check } from 'lucide-react';

type PricingTableProps = {
  id?: string;
  heading?: string;
  description?: string;
};

export function PricingTable({
  id,
  heading = 'What you get when PillarSmart is live',
  description = 'The focus is not on extra software. The focus is on faster replies, stronger follow-up, and cleaner handoff when a real person needs to step in.',
}: PricingTableProps) {
  return (
    <div id={id}>
      <div className='max-w-3xl'>
        <span className='eyebrow'>What you get</span>
        <h2 className='mt-4 text-4xl md:text-5xl'>{heading}</h2>
        <p className='mt-4 text-lg leading-8 text-slate-700'>{description}</p>
      </div>
      <div className='mt-10 grid gap-6 xl:grid-cols-3'>
        {siteConfig.offerTracks.map((plan) => {
          return (
            <article
              key={plan.name}
              className={`panel flex h-full flex-col p-6 md:p-8 ${
                plan.featured
                  ? 'relative border-primary/30 bg-white shadow-[0_28px_80px_-42px_rgba(14,111,108,0.55)]'
                  : ''
              }`}
            >
              <div className='flex items-start justify-between gap-3'>
                <div>
                  <div className='text-2xl text-slate-950'>{plan.name}</div>
                  <p className='mt-3 text-sm leading-7 text-slate-600'>
                    {plan.summary}
                  </p>
                </div>
                {plan.featured ? (
                  <Badge className='shrink-0'>Core layer</Badge>
                ) : null}
              </div>
              <ul className='mt-8 space-y-4 text-sm text-slate-700'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex gap-3'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
