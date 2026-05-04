import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownRight, BellRing, CircleDashed, Star } from 'lucide-react';

const painPoints = [
  {
    title: 'Leads disappear between click and callback',
    body: 'Every extra handoff creates delay. Static pages are fast, but the real win is piping every form fill into an immediate nurture sequence.',
    icon: BellRing,
  },
  {
    title: 'Local SEO content stalls when it depends on the CMS backlog',
    body: 'Publishing articles from the filesystem keeps the content operation tiny, versioned, and easy to ship alongside the marketing site.',
    icon: CircleDashed,
  },
  {
    title: 'Operators need clarity, not another dashboard graveyard',
    body: 'The site should tee up one clear action: book, call, or start a trial. Everything else belongs inside the white-labeled app.',
    icon: Star,
  },
];

export function ProblemSection() {
  return (
    <section className='shell py-20 md:py-24'>
      <div className='max-w-3xl'>
        <span className='eyebrow'>What we are solving</span>
        <h2 className='mt-4 text-4xl md:text-5xl'>
          Local businesses do not need a giant marketing stack. They need one
          clear operating surface.
        </h2>
        <p className='mt-4 text-lg leading-8 text-slate-700'>
          PillarSmart is tuned for owners who want a sharper front-end, better
          search visibility, and leads routed directly into follow-up without
          spinning up a custom backend.
        </p>
      </div>
      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {painPoints.map((point) => {
          const Icon = point.icon;

          return (
            <Card key={point.title}>
              <CardHeader>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                  <Icon className='h-6 w-6' />
                </div>
                <CardTitle>{point.title}</CardTitle>
              </CardHeader>
              <CardContent className='text-base leading-7 text-slate-700'>
                {point.body}
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className='mt-10 panel px-8 py-8'>
        <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
          <div>
            <div className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
              From messy stack to simple flow
            </div>
            <h3 className='mt-3 text-3xl text-slate-950'>
              One static site in front, one workflow engine behind it.
            </h3>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='rounded-[24px] border border-slate-900/10 bg-white px-5 py-5'>
              <div className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>
                Before
              </div>
              <p className='mt-3 text-base leading-7 text-slate-700'>
                Slow landing pages, one-off tools, missed follow-up, and no
                clean publishing motion for SEO content.
              </p>
            </div>
            <div className='rounded-[24px] bg-primary px-5 py-5 text-primary-foreground'>
              <div className='flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/70'>
                <ArrowDownRight className='h-4 w-4' />
                After
              </div>
              <p className='mt-3 text-base leading-7 text-white/85'>
                An edge-cached site, direct webhook handoff into GHL, and a
                blog that ships as part of your build pipeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
