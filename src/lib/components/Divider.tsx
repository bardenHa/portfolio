// import { JSX, splitProps } from 'solid-js';
// import { Divider as SDivider, DividerProps as SDividerProps } from '@hope-ui/solid';
// import { defaultTo } from 'rambda';

// const DIVIDER_SIZE_MARGIN = {
//   sm: '$4 0',
//   md: '$8 0',
//   lg: '$12 0',
// } as const;

// interface DividerProps extends SDividerProps {
//   size?: 'sm' | 'md' | 'lg';
// }

// export function Divider(props: Readonly<DividerProps>): JSX.Element {
//   const [{ size }, rest] = splitProps(props, ['size']);

//   return (
//     <SDivider margin={DIVIDER_SIZE_MARGIN[defaultTo('md', size)]} {...rest}>
//       {props.children}
//     </SDivider>
//   );
// }

import { JSX, splitProps } from 'solid-js';
import { cva, cx, type VariantProps } from 'class-variance-authority';

const dividerStyles = cva(['Divider', 'border-b border-content-neutral-secondary'], {
  defaultVariants: {
    size: 'medium',
  },
  variants: {
    size: {
      large: ['py-12'],
      medium: ['py-8'],
      small: ['py-4'],
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
