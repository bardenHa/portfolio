import { Code } from './code';
import { Display } from './display';
import { Heading } from './heading';
import { Paragraph } from './paragraph';
import { Text } from './text';

export const Typography = {
  Display,
  Heading,
  Text,
  // TODO: rename to Body? Feel like paragraph is too specific
  Paragraph,
  Code,
} as const;

export type { DisplayProps } from './display';
export type { HeadingProps } from './heading';
export type { ParagraphProps } from './paragraph';
export type { TextProps } from './text';

// TODO: add tooltip component like https://dev.to/link2twenty/native-html-tooltips-3od1 but make sure to look into accessibility
// TODO: use abbr tag for abbreviations
// TODO: could implement comps for text styles, small, abbr, strong, em, etc.?
// TODO: make use of skip links https://benmyers.dev/blog/skip-links/
// TODO: https://benmyers.dev/blog/doubled-lighthouse-score/

// TODO: use emphasis & skip-to-content from https://practical-accessibility.today/#main;

// TODO: should probably move towards lowercase filenames to be consistent with all other files

// TODO: Adobe uses detail? could be a nice addition - https://spectrum.adobe.com/page/typography/#Typography-components
