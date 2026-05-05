import { siteConfig } from '@/lib/site';

export function DemoProcessSection() {
  return (
    <section className='shell py-20 md:py-24'>
      <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
        <div>
          <span className='eyebrow'>After you request a demo</span>
          <h2 className='mt-4 text-4xl md:text-5xl'>
            We show you how PillarSmart would handle your own leads, not a
            generic product tour.
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-700'>
            You do not need to prepare technical details. We only need enough
            context to understand the lead flow you already have and where it
            tends to break down.
          </p>
        </div>
        <div className='grid gap-4'>
          {siteConfig.contactSteps.map((step, index) => (
            <div
              key={step}
              className='rounded-[26px] border border-white/80 bg-white/72 px-5 py-5 shadow-sm'
            >
              <div className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>
                Step 0{index + 1}
              </div>
              <p className='mt-3 text-base leading-7 text-slate-700'>{step}</p>
            </div>
          ))}
          <div className='rounded-[26px] border border-primary/20 bg-primary/6 px-5 py-5'>
            <div className='text-xs font-semibold uppercase tracking-[0.24em] text-primary'>
              Response window
            </div>
            <p className='mt-3 text-base leading-7 text-slate-700'>
              Once you submit the form, expect a follow-up within one business
              day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
