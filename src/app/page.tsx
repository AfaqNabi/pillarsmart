import { BlogCard } from '@/components/blog-card';
import { FeaturesGrid } from '@/components/features-grid';
import { Hero } from '@/components/hero';
import { PricingTable } from '@/components/pricing-table';
import { ProblemSection } from '@/components/problem-section';
import { Button } from '@/components/ui/button';
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <ProblemSection />
      <FeaturesGrid />
      <section className='shell py-20 md:py-24'>
        <PricingTable
          id='pricing'
          heading='Simple plans, direct checkout, no extra infrastructure'
          description='Each plan is wired for straight-to-checkout conversion. Swap in your live Stripe or GoHighLevel links, deploy to Cloudflare Pages, and let the edge cache do the heavy lifting.'
        />
      </section>
      <section className='shell py-20 md:py-24'>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-2xl'>
            <span className='eyebrow'>SEO engine</span>
            <h2 className='mt-4 text-4xl md:text-5xl'>
              Publish useful local-business content without touching a database
            </h2>
            <p className='mt-4 text-lg leading-8 text-slate-700'>
              Blog articles live as local `.mdx` files, so every post ships with
              the site build and lands on Cloudflare Pages as static HTML.
            </p>
          </div>
          <Button asChild variant='outline' size='lg' className='self-start md:self-auto'>
            <Link href='/blog/'>Browse the blog</Link>
          </Button>
        </div>
        <div className='grid gap-6 lg:grid-cols-3'>
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <section className='shell pb-24'>
        <div className='panel overflow-hidden px-8 py-10 md:px-12 md:py-14'>
          <div className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
            <div>
              <span className='eyebrow'>Ready to launch</span>
              <h2 className='mt-4 text-4xl md:text-5xl'>
                Ship a marketing site that feels premium and hosts like a static
                brochure
              </h2>
              <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-700'>
                PillarSmart pairs a fast statically generated front-end with
                GoHighLevel automations behind the curtain, so your ops stay
                lean while leads move straight into nurture.
              </p>
            </div>
            <div className='grid gap-4'>
              <Button asChild size='xl'>
                <Link href='/contact/'>Plan the launch</Link>
              </Button>
              <Button asChild variant='outline' size='xl'>
                <Link href='/pricing/'>See all plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
