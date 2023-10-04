import { JSX } from 'solid-js/jsx-runtime';

import { Anchor, AnchorProps } from './anchor';
import { Divider } from './divider';
import { Image, ImageProps } from './image';
import { Table, TableProps } from './table';
import { HeadingProps, ListProps, ParagraphProps, Typography } from './typography';

function isExternalLink(href: string): boolean {
  return href.startsWith('http');
}

export const MdxComponents = {
  a: (props: Readonly<AnchorProps>) => <Anchor external={isExternalLink(props.href)} {...props} />,
  h1: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xxl'} class="mb-4 mt-0" {...props} />,
  h2: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xl'} class="mb-4 mt-10" {...props} />,
  h3: (props: Readonly<HeadingProps>) => <Typography.Heading size={'lg'} class="mb-4 mt-10" {...props} />,
  h4: (props: Readonly<HeadingProps>) => <Typography.Heading size={'md'} class="mb-4 mt-10" {...props} />,
  h5: (props: Readonly<HeadingProps>) => <Typography.Heading size={'sm'} class="mb-2 mt-8" {...props} />,
  h6: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xs'} class="mb-2 mt-6" {...props} />,
  hr: Divider,
  li: Typography.ListItem,
  p: (props: Readonly<ParagraphProps>) => <Typography.Paragraph class="mb-5" {...props} />,
  strong: Typography.Strong,
  em: Typography.Emphasis,
  ul: (props: Readonly<ListProps>) => <Typography.List class="mb-5" {...props} />,
  ol: (props: Readonly<JSX.HTMLAttributes<HTMLOListElement>>) => <ol {...props} class="mb-5" />,
  img: (props: Readonly<ImageProps>) => (
    <Image {...props} showCaption class="rounded-xl" containerClass="mb-5" center />
  ),
  table: (props: Readonly<TableProps>) => <Table {...props} containerClass="mb-5" />,
} as const;

// TODO: add table components
// TODO: add blockquote components
// TODO: go through third blog post and check we have all the components we need
