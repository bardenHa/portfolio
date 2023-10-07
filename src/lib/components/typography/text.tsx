import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from '../types';

type TextBaseProps = VariantProps<typeof labelStyles>;
const labelStyles = cva('Text', {
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: ['text-inherit'],
      subdued: ['text-text-secondary'],
    },
  },
});

export interface TextProps extends PolymorphicComponent<HTMLSpanElement>, TextBaseProps {}

export function Text(props: Readonly<TextProps>): JSX.Element {
  const [{ variant, as, class: className }, rest] = splitProps(props, ['variant', 'as', 'class']);
  return (
    <Dynamic component={defaultTo('span', as)} class={cx(labelStyles({ variant }), className)} {...rest}>
      {props.children}
    </Dynamic>
  );
}
