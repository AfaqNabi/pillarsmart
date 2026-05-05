import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CalendarRange,
  Gauge,
  MessageSquareMore,
  PhoneCall,
  ShieldCheck,
  Star,
} from 'lucide-react';

const features = [
  {
    title: 'Missed-call text back',
    copy: 'When someone calls and nobody can answer, the conversation still starts instead of dying in voicemail.',
    icon: PhoneCall,
  },
  {
    title: 'Website and message follow-up',
    copy: 'Quote requests, chat starts, and direct messages can all be answered quickly without waiting for someone to get free.',
    icon: MessageSquareMore,
  },
  {
    title: 'Booking reminders and no-show recovery',
    copy: 'When a lead is ready, the next step is sent clearly, with reminders and simple re-book prompts baked in.',
    icon: CalendarRange,
  },
  {
    title: 'Lead nurture after the first reply',
    copy: 'Warm leads do not have to disappear just because the first conversation did not close the job on the spot.',
    icon: Gauge,
  },
  {
    title: 'Review requests after the work is done',
    copy: 'Satisfied customers can be nudged at the right time so good jobs turn into stronger social proof over time.',
    icon: Star,
  },
  {
    title: 'Owner oversight and handoff rules',
    copy: 'You keep visibility into conversations and can take over whenever a lead needs a human touch or special handling.',
    icon: ShieldCheck,
  },
];

export function FeaturesGrid() {
  return (
    <section className='shell py-20 md:py-24'>
      <div className='max-w-3xl'>
        <span className='eyebrow'>What is included</span>
        <h2 className='mt-4 text-4xl md:text-5xl'>
          The system is built around the moments where service businesses
          usually drop the ball.
        </h2>
        <p className='mt-4 text-lg leading-8 text-slate-700'>
          PillarSmart is designed to help with fast first response, consistent
          follow-up, and clear next steps without forcing you to babysit your
          inbox.
        </p>
      </div>
      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title} className='h-full'>
              <CardHeader>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700'>
                  <Icon className='h-6 w-6' />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className='text-base leading-7 text-slate-700'>
                {feature.copy}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
