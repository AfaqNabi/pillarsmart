import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/lib/site';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f3ecdf',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'PillarSmart | Done-for-You Lead Response for Service Businesses',
    template: '%s | PillarSmart',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'service business lead response',
    'contractor lead follow up',
    'missed call text back',
    'trades business automation',
    'go high level lead nurture',
    'service business booking automation',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'PillarSmart' }],
  creator: 'PillarSmart',
  publisher: 'PillarSmart',
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'PillarSmart | Done-for-You Lead Response for Service Businesses',
    description: siteConfig.description,
    images: [
      {
        url: '/og-card.svg',
        width: 1200,
        height: 630,
        alt: 'PillarSmart marketing website preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PillarSmart | Done-for-You Lead Response for Service Businesses',
    description: siteConfig.description,
    images: ['/og-card.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full scroll-smooth'>
      <body className='min-h-full bg-background text-foreground antialiased'>
        <div className='relative flex min-h-screen flex-col'>
          <SiteHeader />
          <main className='flex-1'>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
