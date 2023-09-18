import { For, JSX, splitProps } from 'solid-js';

import { Post } from '@/content/config';

import { Anchor } from '../lib/components/Anchor';
import { hyphenate } from '../lib/utils';

interface BlogCardProps {
  slug: string;
  post: Readonly<Post>;
}

export function BlogCard(props: Readonly<BlogCardProps>): JSX.Element {
  const [{ slug, post }, rest] = splitProps(props, ['slug', 'post']);
  const hyphenatedSlug = hyphenate(slug);

  return (
    <article id={hyphenatedSlug} aria-labelledby={`${hyphenatedSlug}-title`} {...rest}>
      <Anchor variant={'subtle'} href={`/blog/${slug}`} class="block">
        <span class="block text-sm font-medium opacity-60">
          {post.date.toLocaleDateString('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        <h3 class="mt-2 text-xl font-semibold" id={`${hyphenatedSlug}-title`}>
          {post.title}
        </h3>
        <p class="mt-2">{post.description}</p>
        <ul class="mt-2 flex flex-wrap gap-x-3 gap-y-1 opacity-60">
          <For each={post.tags}>{tag => <li class="text-sm font-light">#{tag}</li>}</For>
        </ul>
      </Anchor>
    </article>
  );
}
