import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { RelevantTags } from '../types';

type ParagraphBaseProps = VariantProps<typeof paragraphtStyles>;
const paragraphtStyles = cva('Paragraph', {
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
      default: {
        color: 'contentPrimary',
      },
      subdued: {
        color: 'contentSecondary',
      },
    },
  },
});

interface ParagraphProps extends JSX.HTMLAttributes<HTMLParagraphElement>, ParagraphBaseProps {
  as?: RelevantTags;
}

export function Paragraph(props: Readonly<ParagraphProps>): JSX.Element {
  const [{ variant, size, as }, rest] = splitProps(props, ['size', 'variant', 'as']);
  return (
    <Dynamic component={defaultTo('p', as)} class={cx(paragraphtStyles({ variant, size }))} {...rest}>
      {props.children}
    </Dynamic>
  );
}
