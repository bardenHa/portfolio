import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from '../types';

type ListBaseProps = VariantProps<typeof listStyles>;
const listStyles = cva(['List', 'space-y-2 list-disc list-outside pl-[1.75rem]'], {
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: [],
    },
  },
});

export interface ListProps extends PolymorphicComponent<HTMLUListElement>, ListBaseProps {}

export function List(props: Readonly<ListProps>): JSX.Element {
  const [{ as, class: className }, rest] = splitProps(props, ['as', 'class']);
  return (
    <Dynamic component={defaultTo('ul', as)} class={cx(listStyles(), className)} {...rest}>
      {props.children}
    </Dynamic>
  );
}

type ListItemBaseProps = VariantProps<typeof listItemStyles>;
const listItemStyles = cva(['ListItem'], {
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: [],
    },
  },
});

export interface ListItemProps extends PolymorphicComponent<HTMLLIElement>, ListItemBaseProps {}

export function ListItem(props: Readonly<ListProps>): JSX.Element {
  const [{ as, class: className }, rest] = splitProps(props, ['as', 'class']);
  return (
    <Dynamic component={defaultTo('li', as)} class={cx(listItemStyles(), className)} {...rest}>
      {props.children}
    </Dynamic>
  );
}
