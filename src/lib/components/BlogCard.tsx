import { For, JSX, splitProps } from 'solid-js';

import { Post } from '@/content/config';

import { hyphenate } from '../utils';
import { Anchor } from './Anchor';

interface BlogCardProps {
  slug: string;
  post: Readonly<Post>;
}

export function BlogCard(props: Readonly<BlogCardProps>): JSX.Element {
  const [{ slug, post }] = splitProps(props, ['slug', 'post']);

  return (
    <article id={hyphenate(slug)}>
      <Anchor href={`/blog/${slug}`}>
        <span class="block text-sm font-medium opacity-60">
          {post.date.toLocaleDateString('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'short',
          })}
        </span>
        <h3 class="mt-2 text-xl font-semibold">{post.title}</h3>
        <p class="mt-2">{post.description}</p>
        <ul class="mt-2 flex flex-wrap gap-x-3 gap-y-1 opacity-60">
          <For each={post.tags}>{tag => <li class="text-sm font-light">#{tag}</li>}</For>
        </ul>
      </Anchor>
    </article>
  );
}
