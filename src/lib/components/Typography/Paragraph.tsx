import { JSX, splitProps } from 'solid-js';
import { css, Text, TextProps } from '@hope-ui/solid';
import { defaultTo } from 'rambda';

const paragraphtStyles = css({
  variants: {
    variant: {
      primary: {
        color: 'inherit',
      },
      secondary: {
        color: '$neutral10',
      },
    },
  },
});

const PARAGRAPH_SIZE = {
  large: 'lg',
  medium: 'base',
  small: 'sm',
  xsmall: 'xs',
} as const;

interface ParagraphProps extends Omit<TextProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
  variant?: 'primary' | 'secondary';
}

export function Paragraph(props: Readonly<ParagraphProps>): JSX.Element {
  const [{ variant, size }, rest] = splitProps(props, ['size', 'variant']);
  return (
    <Text
      class={paragraphtStyles({
        variant: defaultTo('primary', variant),
      })}
      lineHeight={'$base'}
      fontWeight={'$normal'}
      size={PARAGRAPH_SIZE[defaultTo('medium', size)]}
      {...rest}
    >
      {props.children}
    </Text>
  );
}
