import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from '../types';

type DisplayBaseProps = VariantProps<typeof displayStyles>;
const displayStyles = cva(['Display', 'leading-tight', 'tracking-tighter'], {
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
  variants: {
    size: {
      large: ['text-8xl'],
      medium: ['text-6xl'],
      small: ['text-5xl'],
      xsmall: ['text-4xl'],
    },
    variant: {
      default: ['text-inherit'],
      subdued: ['text-secondary'],
    },
  },
});

interface DisplayProps extends PolymorphicComponent<HTMLHeadingElement>, DisplayBaseProps {}

export function Display(props: Readonly<DisplayProps>): JSX.Element {
  const [{ variant, size, as }, rest] = splitProps(props, ['size', 'variant', 'as']);

  return (
    <Dynamic component={defaultTo('h1', as)} class={cx(displayStyles({ variant, size }))} {...rest}>
      {props.children}
    </Dynamic>
  );
}
