import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowDownRight,
  MessageCircleOff,
  PhoneOff,
  RefreshCcwDot,
  StarOff,
} from 'lucide-react';

const painPoints = [
  {
    title: 'Missed calls stack up while the workday keeps moving',
    body: 'When the phone rings during a site visit, the lead usually gets voicemail, then silence, then your competitor.',
    icon: PhoneOff,
  },
  {
    title: 'Website and DM leads wait too long for a real response',
    body: 'A quote request after hours or a message while you are driving between jobs can sit just long enough to go cold.',
    icon: MessageCircleOff,
  },
  {
    title: 'Most follow-up dies after the first touch',
    body: 'Leads who say "let me think about it" rarely hear back in a consistent way, so warm opportunities fade out.',
    icon: RefreshCcwDot,
  },
  {
    title: 'Review requests happen only when someone remembers',
    body: 'Good jobs get finished, but the happy customer is never nudged for a review because the team is already onto the next stop.',
    icon: StarOff,
  },
];

export function ProblemSection() {
  return (
    <section className='shell py-20 md:py-24'>
      <div className='max-w-3xl'>
        <span className='eyebrow'>Why service teams lose good leads</span>
        <h2 className='mt-4 text-4xl md:text-5xl'>
          The problem usually is not lead volume. It is response time and
          follow-up.
        </h2>
        <p className='mt-4 text-lg leading-8 text-slate-700'>
          Trades-first businesses lose work when calls come in at the wrong
          moment, messages sit overnight, or nobody has time to keep the
          conversation moving after the first reply.
        </p>
      </div>
      <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
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
              What this looks like in real life
            </div>
            <h3 className='mt-3 text-3xl text-slate-950'>
              Busy owners do the work. Fast follow-up gets pushed aside.
            </h3>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='rounded-[24px] border border-slate-900/10 bg-white px-5 py-5'>
              <div className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>
                Before
              </div>
              <p className='mt-3 text-base leading-7 text-slate-700'>
                A homeowner calls while you are on-site, sends a message later,
                and never hears back fast enough to trust you with the job.
              </p>
            </div>
            <div className='rounded-[24px] bg-primary px-5 py-5 text-primary-foreground'>
              <div className='flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/70'>
                <ArrowDownRight className='h-4 w-4' />
                After
              </div>
              <p className='mt-3 text-base leading-7 text-white/85'>
                The lead gets a fast reply, the conversation keeps moving, and
                you can step in only when the job is hot enough to need you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
