import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from './types';

const badgeStyles = cva(['Badge', 'text-xs font-medium px-2 py-0.5 rounded overflow-hidden'], {
  variants: {
    intent: {
      success: 'bg-primary-9 text-primary-3',
      neutral: 'bg-neutral-12 text-neutral-3',
      warning: 'bg-warning-10 text-warning-2 text-black',
      danger: 'bg-danger-11 text-danger-2',
    },
    size: {
      sm: 'text-xs font-medium px-2 py-0.5 rounded',
      md: 'text-sm font-medium px-2.5 py-1 rounded-md',
      lg: 'text-base font-medium px-3 py-1.5 rounded-lg',
    },
  },
  defaultVariants: {
    intent: 'neutral',
    size: 'md',
  },
});

type BadgeBaseProps = VariantProps<typeof badgeStyles>;
interface BadgeProps extends PolymorphicComponent<HTMLDivElement>, BadgeBaseProps {}

export function Badge(props: Readonly<BadgeProps>): JSX.Element {
  const [{ as, class: className, intent }, rest] = splitProps(props, ['as', 'class', 'intent']);
  return (
    <Dynamic component={defaultTo('span', as)} class={cx(badgeStyles({ intent }), className)} {...rest}>
      {props.children}
    </Dynamic>
  );
}
