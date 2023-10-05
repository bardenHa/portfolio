import { JSX, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { Anchor } from '../anchor';
import { PolymorphicComponent } from '../types';
import { Typography } from '.';

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingBaseProps = VariantProps<typeof headingStyles>;
export const headingStyles = cva(['Heading', 'font-semibold leading-tight'], {
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
  variants: {
    size: {
      xxl: ['text-4xl sm:text-5xl'],
      xl: ['text-3xl sm:text-4xl'],
      lg: ['text-2xl sm:text-3xl'],
      md: ['text-xl sm:text-2xl'],
      sm: ['text-lg sm:text-xl'],
      xs: ['text-base sm:text-lg'],
    },
    variant: {
      default: ['text-inherit'],
      subdued: ['text-text-secondary'],
    },
  },
});

export interface HeadingProps extends PolymorphicComponent<HTMLHeadingElement>, HeadingBaseProps {
  hideAnchor?: boolean;
}

/**
 * Rarely do we need to nest more than 4 levels of headings, so we can use 'h4' for multiple sizes.
 */
const HEADING_SIZE_TAG: Record<NonNullable<HeadingBaseProps['size']>, HeadingLevels> = {
  xxl: 'h1',
  xl: 'h2',
  lg: 'h3',
  md: 'h4',
  sm: 'h4',
  xs: 'h4',
};

export function Heading(props: Readonly<HeadingProps>): JSX.Element {
  const [{ variant, size, as, class: className, hideAnchor }, rest] = splitProps(props, [
    'size',
    'variant',
    'as',
    'class',
    'hideAnchor',
  ]);

  const styles = headingStyles({ variant, size });
  const heading = (
    <Dynamic
      component={as ?? HEADING_SIZE_TAG[defaultTo('md', size)]}
      class={cx(
        styles,
        {
          inline: props.id,
        },
        className
      )}
      {...rest}
    >
      {props.children}
    </Dynamic>
  );

  return (
    <Show when={props.id && !hideAnchor} fallback={heading}>
      <div class={className}>
        {heading}
        <Anchor
          href={`#${props.id}`}
          rel="bookmark"
          aria-label={'Permalink to this heading'}
          class={cx(styles, 'ml-[0.5ch] inline text-text-secondary')}
          variant={'distinguished'}
        >
          <Typography.Text variant={'subdued'}>#</Typography.Text>
        </Anchor>
      </div>
    </Show>
  );
}
