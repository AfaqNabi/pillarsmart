import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='shell flex min-h-[60vh] flex-col items-start justify-center py-20'>
      <span className='eyebrow'>404</span>
      <h1 className='mt-4 text-5xl md:text-6xl'>This route was not exported.</h1>
      <p className='mt-4 max-w-xl text-lg leading-8 text-slate-700'>
        The page you were looking for is missing from the current static build.
        Head back home and choose a published route.
      </p>
      <div className='mt-8'>
        <Button asChild size='lg'>
          <Link href='/'>Return home</Link>
        </Button>
      </div>
    </div>
  );
}
