import { JSX, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { Anchor } from '../Anchor';
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
  const [{ variant, size, as, id }, rest] = splitProps(props, ['size', 'variant', 'as', 'id']);

  const styles = displayStyles({ variant, size });
  const display = (
    <Dynamic component={defaultTo('h1', as)} class={cx(styles, { inline: id })} {...rest}>
      {props.children}
    </Dynamic>
  );

  return (
    <Show when={id} fallback={display}>
      {id => (
        <div>
          {display}
          <Anchor
            href={`#${id()}`}
            rel="bookmark"
            aria-labelledby={id()}
            aria-label="Permalink to “aria-labelledby”"
            class={cx(styles, 'inline text-neutral-10')}
          >
            {' '}
            #
          </Anchor>
        </div>
      )}
    </Show>
  );
}
