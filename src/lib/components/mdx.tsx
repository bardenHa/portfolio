import { Anchor, AnchorProps } from './anchor';
import { Divider } from './divider';
import { HeadingProps, ParagraphProps, Typography } from './typography';

// TODO: Add missing components
// TODO: include default margins for these components
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
  // TODO: strong: Strong,
  ul: Typography.List,
  // TODO: add image component, using a caption if available - https://stackoverflow.com/questions/19331362/using-an-image-caption-in-markdown-jekyll
} as const;
