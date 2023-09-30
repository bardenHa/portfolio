import { JSX, splitProps } from 'solid-js';
import { cva, cx, type VariantProps } from 'class-variance-authority';

type EmphasisBaseProps = VariantProps<typeof labelStyles>;
const labelStyles = cva(['Emphasis', 'italic']);

export interface EmphasisProps extends JSX.HTMLAttributes<HTMLSpanElement>, EmphasisBaseProps {}

export function Emphasis(props: Readonly<EmphasisProps>): JSX.Element {
  const [{ class: className }, rest] = splitProps(props, ['class']);
  return (
    <em class={cx(labelStyles(), className)} {...rest}>
      {props.children}
    </em>
  );
}
