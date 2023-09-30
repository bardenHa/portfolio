import { JSX } from 'solid-js/jsx-runtime';

import { Anchor, AnchorProps } from './anchor';
import { Divider } from './divider';
import { Image, ImageProps } from './image';
import { HeadingProps, ParagraphProps, Typography } from './typography';

export const MdxComponents = {
  a: (props: Readonly<AnchorProps>) => <Anchor external {...props} />,
  code: Typography.Code,
  h1: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xxlarge'} class="mb-4 mt-0" {...props} />,
  h2: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xlarge'} class="mb-4 mt-10" {...props} />,
  h3: (props: Readonly<HeadingProps>) => <Typography.Heading size={'large'} class="mb-4 mt-10" {...props} />,
  h4: (props: Readonly<HeadingProps>) => <Typography.Heading size={'medium'} class="mb-4 mt-10" {...props} />,
  h5: (props: Readonly<HeadingProps>) => <Typography.Heading size={'small'} class="mb-2 mt-8" {...props} />,
  h6: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xsmall'} class="mb-2 mt-6" {...props} />,
  hr: Divider,
  li: Typography.ListItem,
  p: (props: Readonly<ParagraphProps>) => <Typography.Paragraph class="mb-5" {...props} />,
  // TODO: add to typography component,
  strong: (props: Readonly<JSX.HTMLAttributes<HTMLElement>>) => <strong class={'font-bold'} {...props} />,
  em: (props: Readonly<JSX.HTMLAttributes<HTMLElement>>) => <em class={'italic'} {...props} />,
  ul: Typography.List,
  img: (props: Readonly<ImageProps>) => (
    <Image {...props} showCaption class="rounded-xl" containerClass="mb-5" center />
  ),
} as const;
