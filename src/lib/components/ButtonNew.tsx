import { JSX, splitProps } from 'solid-js';
import { cva, cx, type VariantProps } from 'class-variance-authority';

// TODO: implement styles
// TODO: split button variant styles, e.g. https://ui.shadcn.com/docs/components/button

export const buttonStyles = cva(
  [
    'Button',
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background whitespace-nowrap',
    'transition-all motion-reduce:transition-none duration-150 ease-in-out',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        solid: 'text-neutral-1 bg-neutral-12 hover:bg-neutral-11',
        subtle: 'text-neutral-11 bg-neutral-3 hover:bg-neutral-5',
        outline: 'border-neutral-12 border-solid border bg-transparent hover:bg-neutral-4',
        ghost: 'bg-transparent hover:bg-neutral-4',
        link: 'text-primary underline-offset-4 hover:underline', // TODO: can we use this instead to inject anchor styles?
      },
      size: {
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        md: 'h-10 px-4 py-2',
      },
      intent: {
        primary: [],
        secondary: [],
        success: [],
        warning: [],
        danger: [],
      },
    },
    compoundVariants: [
      // Primary
      {
        variant: 'solid',
        intent: 'primary',
        class: 'text-neutral-1 bg-neutral-12 hover:bg-neutral-11',
      },
      {
        variant: 'subtle',
        intent: 'primary',
        class: 'text-neutral-11 bg-neutral-3 hover:bg-neutral-5',
      },
      {
        variant: 'outline',
        intent: 'primary',
        class: 'border-neutral-12 border-solid border bg-transparent hover:bg-neutral-4',
      },
      {
        variant: 'ghost',
        intent: 'primary',
        class: 'bg-transparent hover:bg-neutral-4',
      },
      // Secondary
      {
        variant: 'solid',
        intent: 'secondary',
        class: 'text-secondary-1 bg-secondary-12 hover:bg-secondary-11',
      },
      {
        variant: 'subtle',
        intent: 'secondary',
        class: 'text-secondary-11 bg-secondary-3 hover:bg-secondary-5',
      },
      {
        variant: 'outline',
        intent: 'secondary',
        class: 'border-secondary-12 border-solid border bg-transparent hover:bg-secondary-4',
      },
      {
        variant: 'ghost',
        intent: 'secondary',
        class: 'bg-transparent hover:bg-secondary-4',
      },
      // Success
      {
        variant: 'solid',
        intent: 'success',
        class: 'text-success-1 bg-success-10 hover:bg-success-9',
      },
      {
        variant: 'subtle',
        intent: 'success',
        class: 'text-success-11 bg-success-3 hover:bg-success-5',
      },
      {
        variant: 'outline',
        intent: 'success',
        class: 'text-success-11 border-success-11 border-solid border bg-transparent hover:bg-success-4',
      },
      {
        variant: 'ghost',
        intent: 'success',
        class: 'text-success-11 bg-transparent hover:bg-success-4',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      intent: 'primary',
    },
  }
);

// export const buttonStyles = cva(['Button', 'font-semibold', 'border', 'rounded'], {
//   variants: {
//     variant: {
//       solid: [],
//       subtle: [],
//       outline: [],
//       ghost: [],
//     },
//     size: {
//       small: ['text-sm', 'py-1', 'px-2'],
//       medium: ['text-base', 'py-2', 'px-4'],
//     },
//     intent: {
//       primary: [],
//       secondary: [],
//       success: [],
//       warning: [],
//       danger: [],
//     },
//   },
//   compoundVariants: [
//     {
//       variant: 'primary',
//       size: 'medium',
//       class: 'uppercase',
//     },
//   ],
//   defaultVariants: {
//     variant: 'primary',
//     size: 'medium',
//   },
// });

type ButtonBaseProps = VariantProps<typeof buttonStyles>;
interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement>, ButtonBaseProps {
  icon?: JSX.Element; // TODO: only for icon button, need to remove
}

// TODO: don't allow dynamic variant
export function Button(props: Readonly<ButtonProps>): JSX.Element {
  const [{ variant, size, intent, class: className }, rest] = splitProps(props, ['variant', 'size', 'class', 'intent']);
  return (
    <button class={cx(buttonStyles({ variant, size, intent }), className)} {...rest}>
      {props.children}
    </button>
  );
}

// TODO: we weary of https://css-tricks.com/focusing-on-focus-styles/
// TODO: enforce aria label
// TODO: don't allow dynamic variant
// TODO: need to add class prop to all components e.g. class={cx(buttonStyles({ variant, size }), props.class)}
export function IconButton(props: Readonly<ButtonProps>): JSX.Element {
  const [{ icon, class: className }, rest] = splitProps(props, ['icon', 'class']);
  return (
    <button class={cx(buttonStyles(), className)} {...rest}>
      {icon}
      {props.children}
    </button>
  );
}
