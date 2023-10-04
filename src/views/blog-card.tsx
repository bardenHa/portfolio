import { CollectionEntry } from 'astro:content';
import { For, JSX, splitProps } from 'solid-js';

import { Image, Typography } from '@/lib/components';

import { Anchor } from '../lib/components/anchor';
import { hyphenate } from '../lib/utils';

interface BlogCardProps {
  post: Readonly<CollectionEntry<'posts'>>;
}

const FLAGS = {
  showDescription: true,
  showTags: false,
};

export function BlogCard(props: Readonly<BlogCardProps>): JSX.Element {
  const [{ post }, rest] = splitProps(props, ['post']);
  const hyphenatedSlug = hyphenate(post.slug);

  return (
    <article id={hyphenatedSlug} aria-labelledby={`${hyphenatedSlug}-title`} {...rest}>
      <Anchor variant={'subtle'} href={`/blog/${post.slug}`} class="block">
        <Image
          title={post.data.title}
          src={post.data.image.src}
          alt={post.data.image.alt}
          class="aspect-3/4 w-full rounded-xl object-cover"
        />
        <Typography.Paragraph variant={'subdued'} class="mt-3">
          <time dateTime={post.data.date.toISOString()}>
            {post.data.date.toLocaleDateString('en-EN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </Typography.Paragraph>
        <div class="mt-1">
          <Typography.Heading size={'lg'} id={`${hyphenatedSlug}-title`} hideAnchor>
            {post.data.title}
          </Typography.Heading>
          {/* TODO: show max lines 1/2? and truncate */}
          {FLAGS.showDescription && (
            <Typography.Paragraph variant={'subdued'} size={'sm'} class="mt-2 truncate">
              {post.data.description}
            </Typography.Paragraph>
          )}
          {FLAGS.showTags && (
            <ul class="mt-2 flex flex-wrap gap-x-3 gap-y-1 opacity-60">
              <For each={post.data.tags}>{tag => <li class="text-sm font-light">#{tag}</li>}</For>
            </ul>
          )}
        </div>
      </Anchor>
    </article>
  );
}
