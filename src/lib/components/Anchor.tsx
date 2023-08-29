import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from './types';

// TODO: look at Kent C. Dodds' anchor, has nice styles
// TODO: fix aria-current-page selector
type AnchorBaseProps = VariantProps<typeof anchorStyles>;
const anchorStyles = cva(['Anchor', 'transition-colors duration-200 ease-in-out', 'font-medium '], {
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: ['text-primary-8 no-underline font-medium', 'hover:underline'],
      subtle: ['no-underline', 'hover:text-primary-8 hover:no-underline'],
      distinguished: ['underline-link'],
    },
  },
});

interface AnchorProps
  extends PolymorphicComponent<HTMLAnchorElement>,
    AnchorBaseProps,
    JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
}

export function Anchor(props: Readonly<AnchorProps>): JSX.Element {
  const [{ variant, as, class: className }, rest] = splitProps(props, ['variant', 'as', 'class']);
  return (
    <Dynamic component={defaultTo('a', as)} class={cx(anchorStyles({ variant }), className)} {...rest}>
      {props.children}
    </Dynamic>
  );
}

// TODO: implement a variant with similar styles - https://benmyers.dev/blog/aria-labels-and-descriptions/
// TODO: external link styles
