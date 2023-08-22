import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { PolymorphicComponent } from './types';

const cardStyles = cva(['Card', 'p-8 rounded bg-content-neutral-secondary']);

type CardBaseProps = VariantProps<typeof cardStyles>;
interface CardProps extends PolymorphicComponent<HTMLDivElement>, CardBaseProps {}

export function Card(props: Readonly<CardProps>): JSX.Element {
  const [{ as }, rest] = splitProps(props, ['as']);
  return (
    <Dynamic component={defaultTo('article', as)} class={cx(cardStyles())} {...rest}>
      {props.children}
    </Dynamic>
  );
}
