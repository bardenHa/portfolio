import { JSX, splitProps } from 'solid-js';
import { css, Text, TextProps } from '@hope-ui/solid';
import { defaultTo } from 'rambda';

const labelStyles = css({
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

const LABEL_SIZE = {
  large: 'lg',
  medium: 'base',
  small: 'sm',
  xsmall: 'xs',
} as const;

interface LabelProps extends Omit<TextProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
  variant?: 'primary' | 'secondary';
}

export function Label(props: Readonly<LabelProps>): JSX.Element {
  const [{ variant, size }, rest] = splitProps(props, ['size', 'variant']);

  return (
    <Text
      class={labelStyles({ variant: defaultTo('primary', variant) })}
      aria-roledescription="A subtitle, short phrase or sentence that provides context or information about a specific block of text."
      fontWeight={'$medium'}
      lineHeight={'$normal'}
      size={LABEL_SIZE[defaultTo('medium', size)]}
      {...rest}
    >
      {props.children}
    </Text>
  );
}
