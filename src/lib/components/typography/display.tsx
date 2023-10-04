import { JSX, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { Anchor } from '../anchor';
import { PolymorphicComponent } from '../types';
import { Typography } from '.';

type DisplayBaseProps = VariantProps<typeof displayStyles>;
export const displayStyles = cva(['Display', 'font-semibold leading-tight tracking-tighter'], {
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
  variants: {
    size: {
      lg: ['text-5xl sm:text-8xl'],
      md: ['text-4xl sm:text-6xl'],
      sm: ['text-3xl sm:text-5xl'],
      xs: ['text-2xl sm:text-4xl'],
    },
    variant: {
      default: ['text-inherit'],
      subdued: ['text-text-secondary'],
    },
  },
});

export interface DisplayProps extends PolymorphicComponent<HTMLHeadingElement>, DisplayBaseProps {}

/**
 * To be used for standout headings, such as page titles. Should not be used more than once per page.
 * @see https://fae.disability.illinois.edu/rulesets/HEADING_2/
 */
export function Display(props: Readonly<DisplayProps>): JSX.Element {
  const [{ variant, size, as, class: className }, rest] = splitProps(props, ['size', 'variant', 'as', 'class']);

  const styles = displayStyles({ variant, size });
  const display = (
    <Dynamic component={defaultTo('h1', as)} class={cx(styles, { inline: props.id }, className)} {...rest}>
      {props.children}
    </Dynamic>
  );

  return (
    <Show when={props.id} fallback={display}>
      {id => (
        <div>
          {display}
          <Anchor
            href={`#${id()}`}
            rel="bookmark"
            // TODO: fix aria reference label, lookup how this works
            aria-label="Permalink to “aria-labelledby”"
            class={cx(styles, 'ml-[0.5ch] inline text-text-secondary', className)}
            variant={'distinguished'}
          >
            <Typography.Text variant={'subdued'} class="text-inherit">
              #
            </Typography.Text>
          </Anchor>
        </div>
      )}
    </Show>
  );
}
