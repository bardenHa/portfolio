import { JSX, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { Anchor } from '../Anchor';
import { PolymorphicComponent } from '../types';

// TODO: enforce ID prop for headers

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingBaseProps = VariantProps<typeof headingStyles>;
const headingStyles = cva(['Heading', 'font-semibold leading-tight'], {
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
  variants: {
    size: {
      xxlarge: ['text-5xl'],
      xlarge: ['text-4xl'],
      large: ['text-3xl'],
      medium: ['text-2xl'],
      small: ['text-xl'],
      xsmall: ['text-lg'],
    },
    variant: {
      default: ['text-inherit'],
      subdued: ['text-secondary'],
    },
  },
});

interface HeadingProps extends PolymorphicComponent<HTMLHeadingElement>, HeadingBaseProps {}

const HEADING_SIZE_TAG: Record<NonNullable<HeadingBaseProps['size']>, HeadingLevels> = {
  xxlarge: 'h1',
  xlarge: 'h2',
  large: 'h3',
  medium: 'h4',
  small: 'h5',
  xsmall: 'h6',
};

export function Heading(props: Readonly<HeadingProps>): JSX.Element {
  const [{ variant, size, as }, rest] = splitProps(props, ['size', 'variant', 'as']);

  const styles = headingStyles({ variant, size });
  const heading = (
    <Dynamic
      component={as ?? HEADING_SIZE_TAG[defaultTo('medium', size)]}
      class={cx(styles, {
        inline: props.id,
      })}
      {...rest}
    >
      {props.children}
    </Dynamic>
  );

  return (
    <Show when={props.id} fallback={heading}>
      {id => (
        <div>
          {heading}
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

// TODO: add clickable tag to heading like used in these blogs - https://benmyers.dev/blog/clickable-divs/
