import { BlogCard } from '@/components/blog-card';
import { BlogPostRenderer } from '@/components/blog-post-renderer';
import { Badge } from '@/components/ui/badge';
import { getAllPosts, getPostBySlug, getPostSlugs } from '@/lib/blog';
import { siteConfig } from '@/lib/site';
import { formatLongDate } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `/blog/${post.slug}/`,
      },
      openGraph: {
        type: 'article',
        url: `${siteConfig.url}/blog/${post.slug}/`,
        title: post.title,
        description: post.description,
        publishedTime: post.date,
        authors: [post.author],
      },
    };
  } catch {
    return {
      title: 'Article',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (!getPostSlugs().includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);
  const relatedPosts = getAllPosts()
    .filter((entry) => entry.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className='shell py-16 md:py-20'>
      <div className='max-w-4xl'>
        <Link
          href='/blog/'
          className='text-sm font-semibold uppercase tracking-[0.22em] text-primary'
        >
          Back to blog
        </Link>
        <div className='mt-6 flex flex-wrap items-center gap-3'>
          <Badge variant='secondary'>{post.category}</Badge>
          <span className='text-sm text-slate-500'>
            {formatLongDate(post.date)} · {post.readingMinutes} min read
          </span>
        </div>
        <h1 className='mt-5 text-5xl md:text-6xl'>{post.title}</h1>
        <p className='mt-5 text-lg leading-8 text-slate-700'>
          {post.description}
        </p>
        <div className='mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500'>
          By {post.author}
        </div>
      </div>
      <article className='panel mt-10 px-6 py-10 md:px-10 md:py-12'>
        <BlogPostRenderer content={post.content} />
      </article>
      {relatedPosts.length ? (
        <section className='mt-16'>
          <div className='mb-8 max-w-2xl'>
            <span className='eyebrow'>Keep reading</span>
            <h2 className='mt-4 text-4xl'>More from the PillarSmart build log</h2>
          </div>
          <div className='grid gap-6 md:grid-cols-2'>
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
