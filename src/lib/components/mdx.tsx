import { Anchor, AnchorProps } from './anchor';
import { Divider } from './divider';
import { HeadingProps, Typography } from './typography';

// TODO: Add missing components
// TODO: include default margins for these components
export const MdxComponents = {
  a: (props: Readonly<AnchorProps>) => <Anchor external {...props} />,
  code: Typography.Code,
  h1: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xxlarge'} class="mt-0 mb-4" {...props} />,
  h2: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xlarge'} class="mt-10 mb-4" {...props} />,
  h3: (props: Readonly<HeadingProps>) => <Typography.Heading size={'large'} class="mt-10 mb-4" {...props} />,
  h4: (props: Readonly<HeadingProps>) => <Typography.Heading size={'medium'} class="mt-10 mb-4" {...props} />,
  h5: (props: Readonly<HeadingProps>) => <Typography.Heading size={'small'} class="mt-8 mb-2" {...props} />,
  h6: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xsmall'} class="mt-6 mb-2" {...props} />,
  hr: Divider,
  // li: ListItem,
  p: Typography.Paragraph,
  // strong: Strong,
  // ul: List,
} as const;
