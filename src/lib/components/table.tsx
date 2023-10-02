import { JSX, splitProps } from 'solid-js';
import { cva, cx, type VariantProps } from 'class-variance-authority';

type TableBaseProps = VariantProps<typeof tableStyles>;
const tableStyles = cva(['Table', 'my-5']);

export interface TableProps extends JSX.HTMLAttributes<HTMLTableElement>, TableBaseProps {
  containerClass?: string;
}

export function Table(props: Readonly<TableProps>): JSX.Element {
  const [{ class: className, containerClass }, rest] = splitProps(props, ['class', 'containerClass']);
  return (
    <div class={cx('overflow-x-auto rounded-xl border border-solid border-neutral-7 bg-neutral-1', containerClass)}>
      <table class={cx(tableStyles(), className)} {...rest} />
    </div>
  );
}
