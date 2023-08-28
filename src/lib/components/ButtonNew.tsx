import { JSX, splitProps } from 'solid-js';
import { cva, cx, type VariantProps } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'Button',
    'inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background whitespace-nowrap',
    'transition-all motion-reduce:transition-none duration-150 ease-in-out',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'text-neutral-1 bg-neutral-inverse-1 hover:bg-neutral-inverse-6 active:bg-neutral-inverse-8',
        secondary: 'text-neutral-12 bg-neutral-4 hover:bg-neutral-5 active:bg-neutral-6',
        tertiary: 'bg-transparent hover:bg-neutral-5 active:bg-neutral-6',
        placeholder: 'border-neutral-12 border-dashed border bg-transparent hover:bg-neutral-5 active:bg-neutral-6',
        // TODO: implement
        link: 'text-primary underline-offset-4 hover:underline', // TODO: can we use this instead to inject anchor styles?
      },
      size: {
        sm: 'text-sm px-3 py-4 h-9',
        md: 'text-base px-4 py-3.5 h-11',
        lg: 'text-lg px-5 py-4 w-full h-14',
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
        variant: 'primary',
        intent: 'success',
        class: 'text-success-1 bg-success-9 hover:bg-success-10 active:bg-success-11',
      },
      {
        variant: 'secondary',
        intent: 'success',
        class: 'text-success-11 bg-success-3 hover:bg-success-4 active:bg-success-5',
      },
      {
        variant: 'tertiary',
        intent: 'success',
        class: 'text-success-11 bg-transparent hover:bg-success-4 active:bg-success-5',
      },
      {
        variant: 'placeholder',
        intent: 'success',
        class:
          'text-success-11 border-success-11 border-solid border bg-transparent hover:bg-success-4 active:bg-success-5',
      },
    ],
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
      intent: 'neutral',
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonStyles>;
interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement>, ButtonBaseProps {
  leadingIcon?: JSX.Element;
  trailingIcon?: JSX.Element;
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

interface IconButtonProps extends ButtonProps {
  icon: JSX.Element;
  children: never;
}

export function IconButton(props: Readonly<IconButtonProps>): JSX.Element {
  const [{ icon, class: className }, rest] = splitProps(props, ['icon', 'class']);
  return (
    <button class={cx(buttonStyles(), className)} {...rest}>
      {icon}
      {props.children}
    </button>
  );
}
