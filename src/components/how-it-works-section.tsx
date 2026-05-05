import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    title: 'We learn how your business actually handles leads',
    body:
      'We map the questions customers ask, the jobs you want more of, your pricing boundaries, and when a real person should step in.',
  },
  {
    title: 'We connect the channels where inquiries already show up',
    body:
      'Phone leads, website forms, chat starts, and message-driven inquiries all get pulled into one response flow instead of living in separate silos.',
  },
  {
    title: 'Leads get replies, follow-up, and booking support while you stay in control',
    body:
      'The system keeps the conversation moving, while you can still review, override, or take over whenever a lead needs a human touch.',
  },
];

type HowItWorksSectionProps = {
  compact?: boolean;
};

export function HowItWorksSection({
  compact = false,
}: HowItWorksSectionProps) {
  return (
    <section id='how-it-works' className={compact ? 'py-8 md:py-10' : 'shell py-20 md:py-24'}>
      <div className={compact ? 'max-w-3xl' : 'max-w-3xl'}>
        <span className='eyebrow'>How it works</span>
        <h2 className='mt-4 text-4xl md:text-5xl'>
          Built around your workflow, not bolted on top of it.
        </h2>
        <p className='mt-4 text-lg leading-8 text-slate-700'>
          PillarSmart is meant to feel like a dependable follow-up layer for
          the business you already run, not another tool your team has to learn
          from scratch.
        </p>
      </div>
      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {steps.map((step, index) => (
          <Card key={step.title} className='h-full'>
            <CardHeader>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-semibold text-primary'>
                0{index + 1}
              </div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent className='text-base leading-7 text-slate-700'>
              {step.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
