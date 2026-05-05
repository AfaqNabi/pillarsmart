export type NavLink = {
  href: string;
  label: string;
};

export type OfferTrack = {
  name: string;
  summary: string;
  featured?: boolean;
  features: string[];
};

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://pillarsmart.com'
).replace(/\/$/, '');

const clientLoginUrl =
  process.env.NEXT_PUBLIC_CLIENT_LOGIN_URL?.trim() ||
  'https://app.pillarsmart.com';

export function isPlaceholderValue(value: string) {
  return value.includes('placeholder') || value.includes('YOUR_');
}

export const siteConfig = {
  name: 'PillarSmart',
  url: siteUrl,
  description:
    'Done-for-you lead response and follow-up for trades and service businesses that want faster replies, fewer missed leads, and more booked jobs.',
  clientLoginUrl,
  primaryCtaLabel: 'Get Your Free Demo',
  primaryCtaHref: '/contact/',
  navLinks: [
    { href: '/pricing/', label: 'How It Works' },
    { href: '/contact/', label: 'Get Demo' },
    { href: '/blog/', label: 'Blog' },
  ] satisfies NavLink[],
  heroPillars: [
    'Missed calls turn into fast text conversations while you are still on the job.',
    'Website, phone, and message leads get follow-up without you chasing them.',
    'You can review every conversation and step in anytime.',
  ],
  offerTracks: [
    {
      name: 'Capture every inquiry',
      summary:
        'Make sure calls, chats, and quote requests do not stall while your team is busy working.',
      features: [
        'Missed-call text back from your business number',
        'Website form and chat follow-up routed into one place',
        'Fast replies for common lead questions and quote requests',
        'Lead handoff rules for when a real person should step in',
      ],
    },
    {
      name: 'Keep leads moving',
      summary:
        'Stay consistent after the first reply so warm leads do not disappear between jobs or after hours.',
      featured: true,
      features: [
        'Booking links at the right point in the conversation',
        'Reminders, no-show follow-up, and simple nurture flows',
        'Review requests after completed work',
        'Clear next-step messaging instead of one-and-done replies',
      ],
    },
    {
      name: 'Stay in control',
      summary:
        'Know what is happening with your leads without living in your inbox all day.',
      features: [
        'Conversation visibility when you want to review a lead',
        'Manual takeover whenever a hot lead needs a human touch',
        'Training around your services, pricing, and tone',
        'A rollout that fits how your business already sells and books work',
      ],
    },
  ] satisfies OfferTrack[],
  faqs: [
    {
      question: 'How is this different from a chatbot?',
      answer:
        'PillarSmart is built around your real services, tone, and booking process. The goal is not to sound clever. The goal is to reply quickly, guide good leads forward, and hand off the wrong conversations instead of guessing.',
    },
    {
      question: 'What if it says something wrong?',
      answer:
        'The system is trained on your business rules before it goes live. Unknown or sensitive questions should trigger a handoff instead of a made-up answer, and you can review conversations whenever you want.',
    },
    {
      question: 'Do I lose control of customer conversations?',
      answer:
        'No. You stay in control. PillarSmart helps with speed and consistency, but you can step in on any conversation, review what was said, and decide where human follow-up matters most.',
    },
    {
      question: 'How long does setup take?',
      answer:
        'The goal is a fast rollout. We learn how your business handles leads, connect the key channels, and shape the messaging around your workflow before anything goes live.',
    },
    {
      question: 'What businesses is this best for?',
      answer:
        'The strongest fit is trades-first and service businesses that already get calls, quote requests, or messages, but lose some of them because replies are slow or follow-up is inconsistent.',
    },
    {
      question: 'What happens after I request a demo?',
      answer:
        'We review your business, map the main lead scenarios you deal with, and reach out within one business day to book a walkthrough of a custom demo built around your lead flow.',
    },
  ],
  contactSteps: [
    'Tell us what kind of leads you get and where follow-up usually slips.',
    'We shape a demo around missed calls, messages, quote requests, and booking handoff.',
    'We walk you through the flow and show how PillarSmart would fit your business.',
  ],
};
