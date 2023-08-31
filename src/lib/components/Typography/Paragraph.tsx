import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from '../types';

type ParagraphBaseProps = VariantProps<typeof paragraphStyles>;
const paragraphStyles = cva('Paragraph', {
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

export interface ParagraphProps extends PolymorphicComponent<HTMLParagraphElement>, ParagraphBaseProps {}

export function Paragraph(props: Readonly<ParagraphProps>): JSX.Element {
  const [{ variant, size, as, class: className }, rest] = splitProps(props, ['size', 'variant', 'as', 'class']);
  return (
    <Dynamic component={defaultTo('p', as)} class={cx(paragraphStyles({ variant, size }), className)} {...rest}>
      {props.children}
    </Dynamic>
  );
}
