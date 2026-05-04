import { slugify } from '@/lib/utils';
import React, { type ReactNode } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

type BlogPostRendererProps = {
  content: string;
};

function flattenChildren(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(flattenChildren).join('');
  }

  if (React.isValidElement(children)) {
    const element = children as React.ReactElement<{ children?: ReactNode }>;
    return flattenChildren(element.props.children);
  }

  return '';
}

const markdownComponents: Components = {
  h2({ children, ...props }) {
    return (
      <h2 id={slugify(flattenChildren(children))} {...props}>
        {children}
      </h2>
    );
  },
  h3({ children, ...props }) {
    return (
      <h3 id={slugify(flattenChildren(children))} {...props}>
        {children}
      </h3>
    );
  },
  a({ href = '', children, ...props }) {
    const external = href.startsWith('http');

    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
};

export function BlogPostRenderer({ content }: BlogPostRendererProps) {
  return (
    <div className='article-prose'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
