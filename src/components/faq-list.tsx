import { siteConfig } from '@/lib/site';

export function FaqList() {
  return (
    <div className='grid gap-4'>
      {siteConfig.faqs.map((item) => (
        <details
          key={item.question}
          className='panel group px-6 py-5 open:bg-white'
        >
          <summary className='cursor-pointer list-none text-left text-lg font-semibold text-slate-950'>
            {item.question}
          </summary>
          <p className='mt-4 max-w-3xl text-base leading-7 text-slate-700'>
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
