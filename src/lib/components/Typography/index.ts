import { Display } from './Display';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import { Text } from './Text';

export const Typography = {
  Display,
  Heading,
  Text,
  Paragraph,
} as const;

// TODO: add tooltip component like https://dev.to/link2twenty/native-html-tooltips-3od1 but make sure to look into accessibility
// TODO: use abbr tag for abbreviations
// TODO: could implement comps for text styles, small, abbr, strong, em, etc.?
// TODO: make use of skip links https://benmyers.dev/blog/skip-links/
// TODO: https://benmyers.dev/blog/doubled-lighthouse-score/

// TODO: use emphasis & skip-to-content from https://practical-accessibility.today/#main;
