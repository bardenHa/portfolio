import { JSX, splitProps } from 'solid-js';
import { cva, cx, type VariantProps } from 'class-variance-authority';

type StrongBaseProps = VariantProps<typeof labelStyles>;
const labelStyles = cva(['Strong', 'font-bold']);

export interface StrongProps extends JSX.HTMLAttributes<HTMLSpanElement>, StrongBaseProps {}

export function Strong(props: Readonly<StrongProps>): JSX.Element {
  const [{ class: className }, rest] = splitProps(props, ['class']);
  return (
    <strong class={cx(labelStyles(), className)} {...rest}>
      {props.children}
    </strong>
  );
}
