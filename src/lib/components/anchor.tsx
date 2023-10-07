import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from './types';

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

export interface AnchorProps
  extends PolymorphicComponent<HTMLAnchorElement>,
    AnchorBaseProps,
    JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  noStyle?: boolean;
}
export function Anchor(props: Readonly<AnchorProps>): JSX.Element {
  const [{ variant, as, class: className, external, noStyle }, rest] = splitProps(props, [
    'variant',
    'as',
    'class',
    'external',
    'noStyle',
  ]);
  return (
    <Dynamic
      component={defaultTo('a', as)}
      class={cx(noStyle ? null : anchorStyles({ variant }), className)}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : ''}
      {...rest}
    >
      {props.children}
    </Dynamic>
  );
}
