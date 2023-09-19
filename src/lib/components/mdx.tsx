import { Anchor } from './anchor';
import { Divider } from './divider';
import { HeadingProps, Typography } from './typography';

// TODO: Add missing components
// TODO: include default margins for these components
export const MdxComponents = {
  a: Anchor,
  code: Typography.Code,
  h1: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xxlarge'} id={'TODO'} {...props} />,
  h2: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xlarge'} id={'TODO'} {...props} />,
  h3: (props: Readonly<HeadingProps>) => <Typography.Heading size={'large'} id={'TODO'} {...props} />,
  h4: (props: Readonly<HeadingProps>) => <Typography.Heading size={'medium'} id={'TODO'} {...props} />,
  h5: (props: Readonly<HeadingProps>) => <Typography.Heading size={'small'} id={'TODO'} {...props} />,
  h6: (props: Readonly<HeadingProps>) => <Typography.Heading size={'xsmall'} id={'TODO'} {...props} />,
  hr: Divider,
  // li: ListItem,
  p: Typography.Paragraph,
  // strong: Strong,
  // ul: List,
} as const;
