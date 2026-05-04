import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type BlogPost } from '@/lib/blog';
import { formatLongDate } from '@/lib/utils';
import Link from 'next/link';

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className='h-full'>
      <CardHeader>
        <div className='flex flex-wrap items-center gap-3'>
          <Badge variant='secondary'>{post.category}</Badge>
          <span className='text-xs uppercase tracking-[0.2em] text-slate-500'>
            {post.readingMinutes} min read
          </span>
        </div>
        <CardTitle className='mt-2 text-3xl'>
          <Link
            href={`/blog/${post.slug}/`}
            className='hover:text-primary'
          >
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-base leading-7 text-slate-700'>{post.description}</p>
        <div className='mt-6 flex items-center justify-between gap-4 text-sm text-slate-500'>
          <span>{formatLongDate(post.date)}</span>
          <Link
            href={`/blog/${post.slug}/`}
            className='font-semibold text-primary underline-offset-4 hover:underline'
          >
            Read article
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
