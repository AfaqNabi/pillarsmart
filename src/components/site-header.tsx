import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 border-b border-black/8 bg-[rgba(244,239,227,0.82)] backdrop-blur-xl'>
      <div className='shell flex flex-wrap items-center justify-between gap-4 py-4'>
        <Link href='/' className='flex items-center gap-3'>
          <span className='flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold tracking-[0.22em] text-primary-foreground'>
            PS
          </span>
          <div>
            <div className='text-lg font-semibold tracking-tight text-slate-950'>
              PillarSmart
            </div>
            <div className='text-xs uppercase tracking-[0.2em] text-slate-500'>
              Faster follow-up for busy service teams
            </div>
          </div>
        </Link>
        <div className='flex flex-wrap items-center gap-2 md:gap-3'>
          <nav className='flex flex-wrap items-center gap-1 rounded-full border border-white/70 bg-white/60 p-1'>
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-950'
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild variant='ghost' className='hidden sm:inline-flex'>
            <a href={siteConfig.clientLoginUrl}>Client Login</a>
          </Button>
          <Button asChild>
            <Link href={siteConfig.primaryCtaHref}>
              {siteConfig.primaryCtaLabel}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
