import { DemoProcessSection } from '@/components/demo-process-section';
import { FeaturesGrid } from '@/components/features-grid';
import { FitSection } from '@/components/fit-section';
import { Hero } from '@/components/hero';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { PrimaryCtaPanel } from '@/components/primary-cta-panel';
import { ProblemSection } from '@/components/problem-section';
import { FaqList } from '@/components/faq-list';
import { TrustSection } from '@/components/trust-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <FitSection />
      <TrustSection />
      <DemoProcessSection />
      <section className='shell py-20 md:py-24'>
        <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
          <div>
            <span className='eyebrow'>Frequently asked questions</span>
            <h2 className='mt-4 text-4xl md:text-5xl'>
              The biggest concerns should be answered before you ever fill out
              the form.
            </h2>
            <p className='mt-4 text-lg leading-8 text-slate-700'>
              If you are wondering whether this is just another chatbot, how
              much control you keep, or what happens after you request a demo,
              start here.
            </p>
          </div>
          <FaqList />
        </div>
      </section>
      <PrimaryCtaPanel
        heading='See how PillarSmart would handle your missed calls, messages, and follow-up.'
        body='Request a free custom demo and we will show you a version tailored to your business instead of pushing you through a generic product tour.'
      />
    </>
  );
}
