import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { ArrowRight, CalendarClock, MessageSquareMore, PhoneMissed } from 'lucide-react';
import Link from 'next/link';

const quickStats = [
  { label: 'Reply speed', value: '<2 mins' },
  { label: 'Channels', value: 'Phone + chat + DMs' },
  { label: 'Owner control', value: 'Review anytime' },
];

export function Hero() {
  return (
    <section className='shell py-14 md:py-20'>
      <div className='section-grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
        <div>
          <span className='eyebrow'>Done-for-you follow-up for busy service teams</span>
          <h1 className='display-title mt-6 max-w-4xl text-slate-950'>
            Never miss another call, message, or quote request while you are on
            the job.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl'>
            PillarSmart gives trades-first service businesses a done-for-you
            lead response system that replies fast, follows up consistently, and
            helps turn more inquiries into booked work.
          </p>
          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <Button asChild size='xl'>
              <Link href={siteConfig.primaryCtaHref}>
                {siteConfig.primaryCtaLabel}
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button asChild size='xl' variant='outline'>
              <Link href='#how-it-works'>How It Works</Link>
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
            <div>
              <div className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
                What the demo will show you
              </div>
              <div className='mt-2 text-3xl text-slate-950'>
                A missed-call lead does not have to die in voicemail.
              </div>
            </div>
            <div className='mt-6 grid gap-4'>
              <div className='rounded-[28px] bg-slate-950 px-5 py-5 text-white'>
                <div className='flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/60'>
                  <PhoneMissed className='h-4 w-4 text-accent' />
                  Missed call scenario
                </div>
                <div className='mt-4 grid gap-3 text-sm leading-6 text-white/80'>
                  <div className='rounded-2xl border border-white/10 bg-white/6 px-4 py-3'>
                    <strong className='block text-white'>3:14 PM</strong>
                    A homeowner calls while you are on a job and no one can pick
                    up.
                  </div>
                  <div className='rounded-2xl border border-white/10 bg-white/6 px-4 py-3'>
                    <strong className='block text-white'>3:15 PM</strong>
                    A text goes back from your business number asking what they
                    need help with.
                  </div>
                  <div className='rounded-2xl border border-white/10 bg-white/6 px-4 py-3'>
                    <strong className='block text-white'>3:22 PM</strong>
                    The lead is qualified and moved toward booking instead of
                    calling the next company.
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-6 rounded-[28px] bg-gradient-to-br from-[#112033] via-[#132640] to-[#1c385d] p-6 text-white'>
              <div className='flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70'>
                <MessageSquareMore className='h-4 w-4' />
                What PillarSmart handles
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
            <div className='mt-4 rounded-[24px] border border-slate-900/10 bg-white px-5 py-5'>
              <div className='flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500'>
                <CalendarClock className='h-4 w-4 text-primary' />
                Next step
              </div>
              <p className='mt-3 text-sm leading-7 text-slate-700'>
                Request a free demo and we will walk you through how this would
                look for your own lead flow.
              </p>
            </div>
          </div>
          <div className='absolute -bottom-8 left-6 hidden rounded-[24px] border border-amber-300/60 bg-amber-100 px-5 py-4 shadow-lg lg:block'>
            <div className='text-xs font-semibold uppercase tracking-[0.24em] text-amber-700'>
              Trades first
            </div>
            <div className='mt-2 text-lg font-semibold text-amber-950'>
              Built for service businesses that already get real inquiries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
