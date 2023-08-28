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
        // TODO: rename to primary
        solid: 'text-neutral-1 bg-neutral-12 hover:bg-neutral-11 active:bg-neutral-10',
        // TODO: rename to secondary
        subtle: 'text-neutral-12 bg-neutral-3 hover:bg-neutral-4 active:bg-neutral-5',
        // TODO: rename to tertiary
        ghost: 'bg-transparent hover:bg-neutral-4 active:bg-neutral-5',
        // TODO: rename to placeholder and use dashed border
        outline: 'border-neutral-12 border-dashed border bg-transparent hover:bg-neutral-4 active:bg-neutral-5',
        link: 'text-primary underline-offset-4 hover:underline', // TODO: can we use this instead to inject anchor styles?
      },
      size: {
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        md: 'h-10 px-4 py-2',
      },
      intent: {
        neutral: [],
        success: [],
        warning: [],
        danger: [],
      },
    },
    compoundVariants: [
      // Success
      {
        variant: 'solid',
        intent: 'success',
        class: 'text-success-1 bg-success-9 hover:bg-success-10 active:bg-success-11',
      },
      {
        variant: 'subtle',
        intent: 'success',
        class: 'text-success-11 bg-success-3 hover:bg-success-4 active:bg-success-5',
      },
      {
        variant: 'outline',
        intent: 'success',
        class:
          'text-success-11 border-success-11 border-solid border bg-transparent hover:bg-success-4 active:bg-success-5',
      },
      {
        variant: 'ghost',
        intent: 'success',
        class: 'text-success-11 bg-transparent hover:bg-success-4 active:bg-success-5',
      },
    ],
    defaultVariants: {
      // TODO: make default 'secondary' as this is the most common use case
      variant: 'subtle',
      size: 'md',
      intent: 'neutral',
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

/**
 * Follow Uber Base principles:
 * @see https://base.uber.com/6d2425e9f/p/756216-button/b/336373
 */
export function Button(props: Readonly<ButtonProps>): JSX.Element {
  const [{ variant, size, intent, class: className }, rest] = splitProps(props, ['variant', 'size', 'class', 'intent']);
  return (
    <button class={cx(buttonStyles({ variant, size, intent }), className)} {...rest}>
      {props.children}
    </button>
  );
}

// TODO: we weary of https://css-tricks.com/focusing-on-focus-styles/
// TODO: enforce aria label (Icon button should not allow children)
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
