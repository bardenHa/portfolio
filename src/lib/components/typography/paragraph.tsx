import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from '../types';

type ParagraphBaseProps = VariantProps<typeof paragraphStyles>;
const paragraphStyles = cva('Paragraph', {
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
  variants: {
    size: {
      lg: ['text-lg', 'leading-tight'],
      md: ['text-base', 'leading-tight'],
      sm: ['text-sm', 'leading-tight'],
      xs: ['text-xs', 'leading-tight'],
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
