import { JSX, splitProps } from 'solid-js';
import { cva, cx, type VariantProps } from 'class-variance-authority';

const dividerStyles = cva(['Divider', 'border-content-neutral-secondary'], {
  defaultVariants: {
    size: 'md',
  },
  // TODO: change size naming to lg, md, sm
  variants: {
    size: {
      lg: ['my-12'],
      md: ['my-8'],
      sm: ['my-4'],
    },
  },
});

type DividerBaseProps = VariantProps<typeof dividerStyles>;
interface DividerProps extends JSX.HTMLAttributes<HTMLHRElement>, DividerBaseProps {}

export function Divider(props: Readonly<DividerProps>): JSX.Element {
  const [{ size }, rest] = splitProps(props, ['size']);
  return (
    <hr class={cx(dividerStyles({ size }))} {...rest}>
      {props.children}
    </hr>
  );
}
