'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { isPlaceholderValue } from '@/lib/site';
import { AlertTriangle, CheckCircle2, Loader2, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Add your full name.').max(80),
  email: z.string().trim().email('Use a valid email address.'),
  company: z.string().trim().max(80).optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(20, 'Share a bit more context so the workflow can route correctly.')
    .max(1500, 'Keep the message under 1,500 characters.'),
  website: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmissionState =
  | { kind: 'idle' }
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string };

const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL?.trim() ?? '';

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    kind: 'idle',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
      website: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (values.website) {
      return;
    }

    if (!webhookUrl || isPlaceholderValue(webhookUrl)) {
      setSubmissionState({
        kind: 'error',
        message:
          'Add NEXT_PUBLIC_GHL_WEBHOOK_URL before launch so submissions can reach GoHighLevel.',
      });
      return;
    }

    const payload = {
      ...values,
      source: 'pillarsmart-site',
      submittedAt: new Date().toISOString(),
      page: '/contact/',
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }

      reset();
      setSubmissionState({
        kind: 'success',
        message:
          'Lead sent to GoHighLevel. If your workflow is connected, nurture should start immediately.',
      });
    } catch {
      let delivered = false;

      if (typeof navigator !== 'undefined' && 'sendBeacon' in navigator) {
        const blob = new Blob([JSON.stringify(payload)], {
          type: 'text/plain;charset=UTF-8',
        });
        delivered = navigator.sendBeacon(webhookUrl, blob);
      }

      if (!delivered) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'text/plain;charset=UTF-8',
            },
            body: JSON.stringify(payload),
          });

          delivered = true;
        } catch {
          delivered = false;
        }
      }

      if (delivered) {
        reset();
        setSubmissionState({
          kind: 'success',
          message:
            'Lead dispatched using the browser fallback. Confirm the inbound webhook is mapped inside GoHighLevel.',
        });
        return;
      }

      setSubmissionState({
        kind: 'error',
        message:
          'The webhook could not be reached from this browser. Verify the URL and consider an API Gateway proxy if GHL blocks CORS.',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='panel grid gap-5 p-6 md:p-8'
    >
      <div className='grid gap-5 md:grid-cols-2'>
        <div className='grid gap-2'>
          <Label htmlFor='name'>Full name</Label>
          <Input
            id='name'
            placeholder='Jordan Reyes'
            autoComplete='name'
            {...register('name')}
          />
          {errors.name ? (
            <p className='text-sm text-destructive'>{errors.name.message}</p>
          ) : null}
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            placeholder='jordan@pillarsmart.com'
            autoComplete='email'
            {...register('email')}
          />
          {errors.email ? (
            <p className='text-sm text-destructive'>{errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='company'>Company</Label>
        <Input
          id='company'
          placeholder='Northside Dental'
          autoComplete='organization'
          {...register('company')}
        />
        {errors.company ? (
          <p className='text-sm text-destructive'>{errors.company.message}</p>
        ) : null}
      </div>
      <div className='hidden'>
        <Label htmlFor='website'>Leave this empty</Label>
        <Input
          id='website'
          tabIndex={-1}
          autoComplete='off'
          {...register('website')}
        />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='message'>Project brief</Label>
        <Textarea
          id='message'
          placeholder='We need a fast site, blog content, and our leads routed into GoHighLevel with booked-call follow-up.'
          {...register('message')}
        />
        {errors.message ? (
          <p className='text-sm text-destructive'>{errors.message.message}</p>
        ) : null}
      </div>
      <Button type='submit' size='xl' disabled={isSubmitting} className='w-full'>
        {isSubmitting ? (
          <>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Sending to GoHighLevel
          </>
        ) : (
          <>
            <Send className='mr-2 h-4 w-4' />
            Send to GoHighLevel
          </>
        )}
      </Button>
      <div aria-live='polite'>
        {submissionState.kind === 'success' ? (
          <div className='flex items-start gap-3 rounded-[24px] border border-primary/15 bg-primary/7 px-4 py-3 text-sm leading-7 text-slate-700'>
            <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-primary' />
            <span>{submissionState.message}</span>
          </div>
        ) : null}
        {submissionState.kind === 'error' ? (
          <div className='flex items-start gap-3 rounded-[24px] border border-destructive/20 bg-destructive/6 px-4 py-3 text-sm leading-7 text-slate-700'>
            <AlertTriangle className='mt-1 h-5 w-5 shrink-0 text-destructive' />
            <span>{submissionState.message}</span>
          </div>
        ) : null}
      </div>
    </form>
  );
}
