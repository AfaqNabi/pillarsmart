import { ContactForm } from '@/components/contact-form';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Your Free Demo',
  description:
    'Request a free custom demo and see how PillarSmart would handle missed calls, messages, and follow-up for your business.',
};

const demoPreview = [
  'How missed calls could turn into real conversations instead of dead voicemails.',
  'How website, phone, and message leads can move through one follow-up flow.',
  'Where your team keeps control and when a real person should step in.',
];

export default function ContactPage() {
  return (
    <div className='shell py-16 md:py-20'>
      <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
        <div>
          <span className='eyebrow'>Free custom demo</span>
          <h1 className='mt-4 text-5xl md:text-6xl'>
            Tell us about your business and we will build the demo around your
            real lead flow.
          </h1>
          <p className='mt-5 text-lg leading-8 text-slate-700'>
            You do not need to prepare technical details. We just need enough
            context to understand what kinds of calls, messages, and quote
            requests you get today and where follow-up usually breaks down.
          </p>
          <div className='mt-8 grid gap-4'>
            {siteConfig.contactSteps.map((step, index) => (
              <div
                key={step}
                className='rounded-[26px] border border-white/80 bg-white/70 px-5 py-4 shadow-sm'
              >
                <Badge>{`0${index + 1}`}</Badge>
                <p className='mt-3 text-base leading-7 text-slate-700'>{step}</p>
              </div>
            ))}
          </div>
          <div className='panel mt-8 overflow-hidden'>
            <div className='border-b border-slate-900/8 px-5 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
              What we will cover on the demo
            </div>
            <div className='grid gap-4 px-5 py-5'>
              {demoPreview.map((item) => (
                <div
                  key={item}
                  className='rounded-[22px] border border-white/80 bg-white/70 px-4 py-4 text-base leading-7 text-slate-700'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className='mt-6 rounded-[26px] border border-primary/20 bg-primary/6 px-5 py-5'>
            <div className='text-xs font-semibold uppercase tracking-[0.24em] text-primary'>
              Response window
            </div>
            <p className='mt-3 text-base leading-7 text-slate-700'>
              Expect a follow-up within one business day after you submit the
              form.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
