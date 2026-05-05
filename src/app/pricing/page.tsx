import { DemoProcessSection } from '@/components/demo-process-section';
import { FaqList } from '@/components/faq-list';
import { FeaturesGrid } from '@/components/features-grid';
import { FitSection } from '@/components/fit-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { PrimaryCtaPanel } from '@/components/primary-cta-panel';
import { PricingTable } from '@/components/pricing-table';
import { TrustSection } from '@/components/trust-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'See how PillarSmart helps trades and service businesses respond faster, follow up consistently, and keep more leads moving toward booked work.',
};

const valueCards = [
  'Missed calls do not have to end in voicemail and silence.',
  'Website, phone, and message leads can all move through one follow-up flow.',
  'The owner still keeps visibility and can step in on any lead that matters.',
];

export default function PricingPage() {
  return (
    <div>
      <section className='shell py-16 md:py-20'>
        <div className='max-w-3xl'>
          <span className='eyebrow'>How PillarSmart works</span>
          <h1 className='mt-4 text-5xl md:text-6xl'>
            What happens after a lead reaches out to your business.
          </h1>
          <p className='mt-5 text-lg leading-8 text-slate-700'>
            This page is here to make the system concrete. PillarSmart is built
            to help busy service teams reply faster, follow up more
            consistently, and keep lead conversations moving without handing
            over control.
          </p>
        </div>
        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {valueCards.map((value) => (
            <div
              key={value}
              className='rounded-[26px] border border-white/80 bg-white/70 px-5 py-5 text-base leading-7 text-slate-700 shadow-sm'
            >
              {value}
            </div>
          ))}
        </div>
      </section>
      <section className='shell py-16 md:py-20'>
        <PricingTable />
      </section>
      <HowItWorksSection />
      <FeaturesGrid />
      <FitSection />
      <TrustSection />
      <DemoProcessSection />
      <section className='shell grid gap-10 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
        <div>
          <span className='eyebrow'>Frequently asked questions</span>
          <h2 className='mt-4 text-4xl md:text-5xl'>
            Clear answers before you request a demo.
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-700'>
            The goal is to remove the biggest objections before you decide if
            PillarSmart is worth a closer look for your business.
          </p>
        </div>
        <FaqList />
      </section>
      <PrimaryCtaPanel
        eyebrow='See your version'
        heading='Want to see what this would look like for your business?'
        body='Request a free custom demo and we will walk you through missed calls, message follow-up, and booking flow using your own lead scenarios.'
      />
    </div>
  );
}
