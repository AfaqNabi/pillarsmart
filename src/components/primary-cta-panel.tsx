import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import Link from 'next/link';

type PrimaryCtaPanelProps = {
  eyebrow?: string;
  heading: string;
  body: string;
};

export function PrimaryCtaPanel({
  eyebrow = 'Ready to see it',
  heading,
  body,
}: PrimaryCtaPanelProps) {
  return (
    <section className='shell pb-24'>
      <div className='panel overflow-hidden px-8 py-10 md:px-12 md:py-14'>
        <div className='grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
          <div>
            <span className='eyebrow'>{eyebrow}</span>
            <h2 className='mt-4 text-4xl md:text-5xl'>{heading}</h2>
            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-700'>
              {body}
            </p>
          </div>
          <div className='grid gap-4'>
            <Button asChild size='xl'>
              <Link href={siteConfig.primaryCtaHref}>
                {siteConfig.primaryCtaLabel}
              </Link>
            </Button>
            <p className='max-w-md text-sm leading-7 text-slate-600'>
              No technical prep needed. We will review your request and reach
              out within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
