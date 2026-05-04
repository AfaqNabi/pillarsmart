import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteConfig, type PricingPlan, isPlaceholderValue } from '@/lib/site';
import { formatCurrency } from '@/lib/utils';
import { Check } from 'lucide-react';

type PricingTableProps = {
  id?: string;
  heading?: string;
  description?: string;
};

function planHref(plan: PricingPlan) {
  return isPlaceholderValue(plan.checkoutUrl) ? '/contact/' : plan.checkoutUrl;
}

export function PricingTable({
  id,
  heading = 'Choose the plan that matches your sales motion',
  description = 'Each plan is structured to move from marketing site to trial checkout in a single click.',
}: PricingTableProps) {
  return (
    <div id={id}>
      <div className='max-w-3xl'>
        <span className='eyebrow'>Pricing</span>
        <h2 className='mt-4 text-4xl md:text-5xl'>{heading}</h2>
        <p className='mt-4 text-lg leading-8 text-slate-700'>{description}</p>
      </div>
      <div className='mt-10 grid gap-6 xl:grid-cols-3'>
        {siteConfig.pricingPlans.map((plan) => {
          const placeholderCheckout = isPlaceholderValue(plan.checkoutUrl);

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
                  <Badge className='shrink-0'>Most Popular</Badge>
                ) : null}
              </div>
              <div className='mt-8'>
                <div className='flex items-end gap-2'>
                  <span className='text-5xl font-semibold text-slate-950'>
                    {formatCurrency(plan.monthlyPrice)}
                  </span>
                  <span className='pb-1 text-sm uppercase tracking-[0.18em] text-slate-500'>
                    / month
                  </span>
                </div>
                <p className='mt-3 text-sm leading-7 text-slate-600'>
                  {plan.audience}
                </p>
              </div>
              <ul className='mt-8 space-y-4 text-sm text-slate-700'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex gap-3'>
                    <Check className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-8 flex-1' />
              <Button asChild size='xl' className='w-full'>
                <a
                  href={planHref(plan)}
                  target={placeholderCheckout ? undefined : '_blank'}
                  rel={placeholderCheckout ? undefined : 'noreferrer'}
                >
                  {plan.trialLabel}
                </a>
              </Button>
              <p className='mt-3 text-xs leading-6 text-slate-500'>
                {placeholderCheckout
                  ? 'Placeholder checkout link detected. Update your public Stripe or GHL URL before launch.'
                  : 'Direct checkout link is ready for live trial conversion.'}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
