import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { cache } from 'react';
import 'server-only';

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  featured?: boolean;
  tags?: string[];
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
  excerpt: string;
  readingMinutes: number;
};

const postsDirectory = path.join(process.cwd(), 'content/blog');

function cleanValue(value: string) {
  return value.trim().replace(/^['"]|['"]$/g, '');
}

function parseFrontmatter(source: string) {
  if (!source.startsWith('---\n')) {
    return { data: {} as Partial<BlogFrontmatter>, content: source.trim() };
  }

  const boundary = source.indexOf('\n---\n', 4);

  if (boundary === -1) {
    return { data: {} as Partial<BlogFrontmatter>, content: source.trim() };
  }

  const rawFrontmatter = source.slice(4, boundary).split('\n');
  const data: Partial<BlogFrontmatter> = {};

  for (const line of rawFrontmatter) {
    if (!line.trim() || line.trim().startsWith('#')) {
      continue;
    }

    const separatorIndex = line.indexOf(':');

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim() as keyof BlogFrontmatter;
    const rawValue = line.slice(separatorIndex + 1).trim();

    if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      const parsedArray = rawValue
        .slice(1, -1)
        .split(',')
        .map((item) => cleanValue(item))
        .filter(Boolean);
      (data as Record<string, unknown>)[key] = parsedArray;
      continue;
    }

    if (rawValue === 'true' || rawValue === 'false') {
      (data as Record<string, unknown>)[key] = rawValue === 'true';
      continue;
    }

    (data as Record<string, unknown>)[key] = cleanValue(rawValue);
  }

  return {
    data,
    content: source.slice(boundary + 5).trim(),
  };
}

function estimateReadingMinutes(content: string) {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 200));
}

function createExcerpt(content: string, fallback: string) {
  const paragraph = content
    .split('\n')
    .find((line) => line.trim() && !line.trim().startsWith('#'));

  if (!paragraph) {
    return fallback;
  }

  return paragraph
    .replace(/[#>*_`-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const getPostSlugs = cache(() => {
  if (!existsSync(postsDirectory)) {
    return [];
  }

  return readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
});

export const getPostBySlug = cache((slug: string): BlogPost => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const source = readFileSync(fullPath, 'utf8');
  const { data, content } = parseFrontmatter(source);

  if (
    !data.title ||
    !data.description ||
    !data.date ||
    !data.author ||
    !data.category
  ) {
    throw new Error(`Missing required frontmatter in ${slug}.mdx`);
  }

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    category: data.category,
    featured: data.featured ?? false,
    tags: data.tags ?? [],
    content,
    excerpt: createExcerpt(content, data.description),
    readingMinutes: estimateReadingMinutes(content),
  };
});

export const getAllPosts = cache(() => {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((left, right) => right.date.localeCompare(left.date));
});
