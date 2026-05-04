import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { ArrowRight, Cloud, LayoutDashboard, Workflow } from 'lucide-react';
import Link from 'next/link';

const quickStats = [
  { label: 'Lead response', value: '<2 mins' },
  { label: 'Hosting model', value: 'Pages + edge' },
  { label: 'Pipeline handoff', value: 'Webhook based' },
];

export function Hero() {
  return (
    <section className='shell py-14 md:py-20'>
      <div className='section-grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
        <div>
          <span className='eyebrow'>Sprint build for a stateless SaaS front end</span>
          <h1 className='display-title mt-6 max-w-4xl text-slate-950'>
            The unified OS for local businesses that want cleaner follow-up and
            faster SEO wins.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl'>
            PillarSmart gives you a premium marketing site, search-friendly
            content engine, and straight-through lead routing into
            GoHighLevel, without running a persistent Node server.
          </p>
          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <Button asChild size='xl'>
              <Link href='/pricing/'>
                Start 14-Day Trial
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button asChild size='xl' variant='outline'>
              <Link href='/contact/'>Plan the launch</Link>
            </Button>
          </div>
          <div className='mt-10 grid gap-4 sm:grid-cols-3'>
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className='rounded-[24px] border border-white/80 bg-white/70 px-5 py-4 shadow-sm'
              >
                <div className='text-xs font-semibold uppercase tracking-[0.22em] text-slate-500'>
                  {stat.label}
                </div>
                <div className='mt-2 text-2xl font-semibold text-slate-950'>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='relative'>
          <div className='panel overflow-hidden p-6 md:p-8'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
                  Monday command center
                </div>
                <div className='mt-2 text-3xl text-slate-950'>
                  Static front-end, live ops
                </div>
              </div>
              <div className='rounded-full border border-primary/15 bg-primary/10 p-3 text-primary'>
                <LayoutDashboard className='h-5 w-5' />
              </div>
            </div>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <div className='rounded-[24px] bg-slate-950 px-5 py-5 text-white'>
                <div className='text-xs uppercase tracking-[0.24em] text-white/60'>
                  Form submissions
                </div>
                <div className='mt-3 text-4xl font-semibold'>32</div>
                <div className='mt-3 text-sm text-white/70'>
                  11 routed to booked-call workflow in the last 7 days.
                </div>
              </div>
              <div className='rounded-[24px] border border-slate-900/10 bg-white px-5 py-5'>
                <div className='flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500'>
                  <Cloud className='h-4 w-4 text-primary' />
                  Hosting footprint
                </div>
                <div className='mt-3 text-2xl font-semibold text-slate-950'>
                  CDN cached
                </div>
                <div className='mt-3 text-sm leading-6 text-slate-600'>
                  Global edge delivery with static HTML export and no app server
                  babysitting.
                </div>
              </div>
            </div>
            <div className='mt-6 rounded-[28px] bg-gradient-to-br from-[#112033] via-[#132640] to-[#1c385d] p-6 text-white'>
              <div className='flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70'>
                <Workflow className='h-4 w-4' />
                Workflow handoff
              </div>
              <div className='mt-4 grid gap-3'>
                {siteConfig.heroPillars.map((item) => (
                  <div
                    key={item}
                    className='rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white/85'
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute -bottom-8 left-6 hidden rounded-[24px] border border-amber-300/60 bg-amber-100 px-5 py-4 shadow-lg lg:block'>
            <div className='text-xs font-semibold uppercase tracking-[0.24em] text-amber-700'>
              Revenue ready
            </div>
            <div className='mt-2 text-lg font-semibold text-amber-950'>
              3 plans priced for direct checkout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
