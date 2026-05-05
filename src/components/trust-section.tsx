import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BellOff, Eye, ShieldCheck } from 'lucide-react';

const trustPoints = [
  {
    title: 'Trained on your business, not generic scripts',
    body:
      'The goal is to sound aligned with how you actually answer questions, explain services, and move good leads toward the next step.',
    icon: ShieldCheck,
  },
  {
    title: 'Unknowns should trigger handoff, not fake confidence',
    body:
      'If a conversation needs a real person, special pricing, or a judgment call, the system should route it properly instead of pretending to know.',
    icon: BellOff,
  },
  {
    title: 'You can review and step in whenever you want',
    body:
      'PillarSmart is supposed to reduce the busywork, not take control away from the owner or office manager.',
    icon: Eye,
  },
];

export function TrustSection() {
  return (
    <section className='shell py-20 md:py-24'>
      <div className='max-w-3xl'>
        <span className='eyebrow'>Why trust it</span>
        <h2 className='mt-4 text-4xl md:text-5xl'>
          This is meant to feel reliable, not robotic.
        </h2>
        <p className='mt-4 text-lg leading-8 text-slate-700'>
          The point is not to throw AI at your inbox and hope for the best. The
          point is to create a system that sounds aligned with your business and
          knows when a real person should step in.
        </p>
      </div>
      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {trustPoints.map((point) => {
          const Icon = point.icon;

          return (
            <Card key={point.title} className='h-full'>
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
      <div className='panel mt-10 px-8 py-8'>
        <div className='grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center'>
          <div>
            <div className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
              Proof without hype
            </div>
            <h3 className='mt-3 text-3xl text-slate-950'>
              We would rather show you your own demo than make up case-study
              numbers.
            </h3>
          </div>
          <p className='text-base leading-8 text-slate-700'>
            Until there are public case studies, the strongest proof is a custom
            walkthrough built around your actual lead flow. That keeps the pitch
            concrete and avoids inflated promises.
          </p>
        </div>
      </div>
    </section>
  );
}
