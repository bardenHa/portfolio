import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from '../types';

type LabelBaseProps = VariantProps<typeof labelStyles>;
const labelStyles = cva('Label', {
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
      subdued: ['text-secondary'],
    },
  },
});

interface LabelProps extends PolymorphicComponent<HTMLLabelElement>, LabelBaseProps {}

export function Label(props: Readonly<LabelProps>): JSX.Element {
  const [{ variant, size, as }, rest] = splitProps(props, ['size', 'variant', 'as']);
  return (
    <Dynamic component={defaultTo('label', as)} class={cx(labelStyles({ variant, size }))} {...rest}>
      {props.children}
    </Dynamic>
  );
}
