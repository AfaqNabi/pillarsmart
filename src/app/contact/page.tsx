import { ContactForm } from '@/components/contact-form';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Send a project brief to PillarSmart and route the details into your GoHighLevel workflow setup.',
};

const payloadPreview = `{
  "name": "Jordan Reyes",
  "email": "jordan@northsidedental.com",
  "company": "Northside Dental",
  "message": "Need a faster site with direct GHL handoff.",
  "source": "pillarsmart-site"
}`;

export default function ContactPage() {
  return (
    <div className='shell py-16 md:py-20'>
      <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
        <div>
          <span className='eyebrow'>Zero-backend contact flow</span>
          <h1 className='mt-4 text-5xl md:text-6xl'>
            Route project briefs directly into GoHighLevel.
          </h1>
          <p className='mt-5 text-lg leading-8 text-slate-700'>
            This form validates in the browser, then posts the payload straight
            to your GHL inbound webhook. That keeps the site stateless while the
            backend workflow still feels instant.
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
              Example webhook payload
            </div>
            <pre className='overflow-x-auto bg-slate-950 px-5 py-5 text-sm leading-7 text-slate-100'>
              <code>{payloadPreview}</code>
            </pre>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
