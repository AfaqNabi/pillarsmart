import { siteConfig } from '@/lib/site';
import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className='border-t border-black/8 bg-[#efe6d7]/70'>
      <div className='shell grid gap-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end'>
        <div>
          <div className='inline-flex rounded-[28px] border border-white/80 bg-white/78 p-4 shadow-sm'>
            <Image
              src='/pillarsmart-logo-full.png'
              alt='PillarSmart logo'
              width={1000}
              height={858}
              className='h-24 w-auto md:h-28'
            />
          </div>
          <p className='mt-3 max-w-2xl text-sm leading-7 text-slate-600'>
            Done-for-you lead response and follow-up for trades and service
            businesses that want fewer missed leads and more booked jobs.
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
