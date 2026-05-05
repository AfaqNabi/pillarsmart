import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fitSignals = [
  'You already get calls, quote requests, or website inquiries.',
  'The owner or a small team still handles most responses.',
  'Leads sometimes wait because everyone is busy doing the actual work.',
  'You want a working system, not a new dashboard to babysit all day.',
];

const industries = [
  'Contractors',
  'HVAC',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Cleaning',
  'Landscaping',
  'Other service teams with steady inbound demand',
];

export function FitSection() {
  return (
    <section className='shell py-20 md:py-24'>
      <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
        <div>
          <span className='eyebrow'>Who it is for</span>
          <h2 className='mt-4 text-4xl md:text-5xl'>
            Best for service businesses that already have demand, but not a
            clean follow-up system.
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-700'>
            PillarSmart is strongest when your business already gets real
            inquiries and the main problem is speed, consistency, or somebody
            having to remember every next step manually.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Strong fit signals</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4 text-base leading-7 text-slate-700'>
            {fitSignals.map((signal) => (
              <div
                key={signal}
                className='rounded-[22px] border border-slate-900/10 bg-white px-4 py-4'
              >
                {signal}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className='mt-10 panel px-8 py-8'>
        <div className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
          Trades-first examples
        </div>
        <div className='mt-4 flex flex-wrap gap-3'>
          {industries.map((industry) => (
            <span
              key={industry}
              className='rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm'
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
