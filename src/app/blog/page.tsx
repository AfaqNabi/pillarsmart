import { BlogCard } from '@/components/blog-card';
import { Badge } from '@/components/ui/badge';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles for service-business owners who want faster follow-up, cleaner lead handling, and stronger booking systems.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <div className='shell py-16 md:py-20'>
      <div className='max-w-3xl'>
        <span className='eyebrow'>Insights for service teams</span>
        <h1 className='mt-4 text-5xl md:text-6xl'>
          Practical ideas for better lead response, follow-up, and booking flow.
        </h1>
        <p className='mt-5 text-lg leading-8 text-slate-700'>
          Use these articles to understand where service businesses usually lose
          good inquiries and what a stronger follow-up system should look like
          once a lead reaches out.
        </p>
      </div>
      {featuredPost ? (
        <div className='panel mt-10 overflow-hidden px-8 py-8'>
          <div className='grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center'>
            <div>
              <Badge>Featured article</Badge>
              <h2 className='mt-4 text-4xl'>{featuredPost.title}</h2>
              <p className='mt-4 text-base leading-7 text-slate-700'>
                {featuredPost.description}
              </p>
            </div>
            <div>
              <p className='text-sm leading-7 text-slate-600'>
                {featuredPost.excerpt}
              </p>
              <div className='mt-6'>
                <Link
                  href={`/blog/${featuredPost.slug}/`}
                  className='font-semibold text-primary underline-offset-4 hover:underline'
                >
                  Read the featured piece
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {remainingPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
