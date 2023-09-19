import { CollectionEntry } from 'astro:content';
import { For, JSX, splitProps } from 'solid-js';

import { Anchor } from '../lib/components/anchor';
import { hyphenate } from '../lib/utils';

interface BlogCardProps {
  post: Readonly<CollectionEntry<'posts'>>;
}

export function BlogCard(props: Readonly<BlogCardProps>): JSX.Element {
  const [{ post }, rest] = splitProps(props, ['post']);
  const hyphenatedSlug = hyphenate(post.slug);

  return (
    <article id={hyphenatedSlug} aria-labelledby={`${hyphenatedSlug}-title`} {...rest}>
      <Anchor variant={'subtle'} href={`/blog/${post.slug}`} class="block">
        <span class="block text-sm font-medium opacity-60">
          {post.data.date.toLocaleDateString('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        <h3 class="mt-2 text-xl font-semibold" id={`${hyphenatedSlug}-title`}>
          {post.data.title}
        </h3>
        <p class="mt-2">{post.data.description}</p>
        <ul class="mt-2 flex flex-wrap gap-x-3 gap-y-1 opacity-60">
          <For each={post.data.tags}>{tag => <li class="text-sm font-light">#{tag}</li>}</For>
        </ul>
      </Anchor>
    </article>
  );
}
