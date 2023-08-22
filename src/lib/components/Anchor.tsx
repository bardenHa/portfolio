import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from './types';

type AnchorBaseProps = VariantProps<typeof anchorStyles>;
const anchorStyles = cva(['Anchor', 'transition-colors duration-200 ease-in-out', 'font-medium '], {
  defaultVariants: {
    colourScheme: 'primary',
    variant: 'default',
  },
  variants: {
    colourScheme: {
      primary: [],
      neutral: [],
    },
    variant: {
      default: [],
      subtle: ['text-neutral-10 no-underline', 'hover:text-neutral-12 hover:no-underline'],
      distinguished: [
        'text-inherit no-underline',
        'hover:text-neutral-10 hover:no-underline',
        'bg-gradient-to-r from-neutral-10 to-neutral-10 bg-no-repeat bg-size-0.05em 100%',
        'bg-position 100% 100% 0px 100%',
        'px-0.05rem',
        'pb-0.15rem',
        'transition-all duration-200 ease-in-out',
      ],
    },
  },
  compoundVariants: [
    {
      colourScheme: 'primary',
      variant: 'default',
      class: ['text-primary-12'],
    },
    {
      colourScheme: 'neutral',
      variant: 'default',
      class: ['text-neutral-12'],
    },
    {
      colourScheme: 'primary',
      variant: 'subtle',
      class: ['hover:text-primary-12'],
    },
    {
      colourScheme: 'neutral',
      variant: 'subtle',
      class: ['hover:text-neutral-12'],
    },
    {
      colourScheme: 'primary',
      variant: 'distinguished',
      class: ['hover:text-primary-12'],
    },
    {
      colourScheme: 'neutral',
      variant: 'distinguished',
      class: ['hover:text-neutral-12'],
    },
  ],
});

interface AnchorProps extends PolymorphicComponent<HTMLAnchorElement>, AnchorBaseProps {
  href: string;
}

export function Anchor(props: Readonly<AnchorProps>): JSX.Element {
  const [{ variant, colourScheme, as }, rest] = splitProps(props, ['colourScheme', 'variant', 'as']);
  return (
    <Dynamic component={defaultTo('a', as)} class={cx(anchorStyles({ variant, colourScheme }))} {...rest}>
      {props.children}
    </Dynamic>
  );
}
