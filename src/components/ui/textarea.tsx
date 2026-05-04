import * as React from 'react';

import { cn } from '@/lib/utils';

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-36 w-full rounded-[26px] border border-input bg-white/85 px-4 py-3 text-base text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus-visible:ring-4 focus-visible:ring-ring',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
