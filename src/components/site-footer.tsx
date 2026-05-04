import { siteConfig } from '@/lib/site';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className='border-t border-black/8 bg-[#efe6d7]/70'>
      <div className='shell grid gap-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end'>
        <div>
          <div className='text-2xl text-slate-950'>PillarSmart</div>
          <p className='mt-3 max-w-2xl text-sm leading-7 text-slate-600'>
            A statically generated lead engine for local businesses, backed by
            GoHighLevel workflows, Stripe checkout, and Cloudflare Pages edge hosting.
          </p>
        </div>
        <div className='flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700 md:justify-end'>
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className='hover:text-slate-950'>
              {link.label}
            </Link>
          ))}
          <a href={siteConfig.clientLoginUrl} className='hover:text-slate-950'>
            Client Login
          </a>
        </div>
      </div>
    </footer>
  );
}
