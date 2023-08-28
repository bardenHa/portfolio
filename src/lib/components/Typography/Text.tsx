import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from '../types';

type TextBaseProps = VariantProps<typeof labelStyles>;
const labelStyles = cva('Text', {
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
  variants: {
    size: {
      large: ['text-lg', 'leading-tight'],
      medium: ['text-base', 'leading-tight'],
      small: ['text-sm', 'leading-tight'],
      xsmall: ['text-xs', 'leading-tight'],
    },
    variant: {
      default: ['text-inherit'],
      subdued: ['text-text-secondary'],
    },
  },
});

interface TextProps extends PolymorphicComponent<HTMLSpanElement>, TextBaseProps {}

export function Text(props: Readonly<TextProps>): JSX.Element {
  const [{ variant, size, as }, rest] = splitProps(props, ['size', 'variant', 'as']);
  return (
    <Dynamic component={defaultTo('span', as)} class={cx(labelStyles({ variant, size }))} {...rest}>
      {props.children}
    </Dynamic>
  );
}
