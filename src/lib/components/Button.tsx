import { FiMoon, FiSun } from 'solid-icons/fi';
import { JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

import { getCurrentTheme, toggleTheme } from '../utils';
import { PolymorphicComponent } from './types';

// TODO: implement styles
const buttonStyles = cva(['Button', 'font-semibold', 'border', 'rounded'], {
  variants: {
    variant: {
      primary: ['bg-blue-500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
      ghost: ['bg-transparent', 'text-gray-800', 'border-transparent', 'hover:bg-gray-100'],
      subtle: ['bg-transparent', 'text-gray-800', 'border-transparent', 'hover:bg-gray-100'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      size: 'medium',
      class: 'uppercase',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

type ButtonBaseProps = VariantProps<typeof buttonStyles>;
interface ButtonProps extends PolymorphicComponent<HTMLDivElement>, ButtonBaseProps {
  icon?: JSX.Element;
}

export function Button(props: Readonly<ButtonProps>): JSX.Element {
  const [{ as }, rest] = splitProps(props, ['as']);
  return (
    <Dynamic component={defaultTo('button', as)} class={cx(buttonStyles())} {...rest}>
      {props.children}
    </Dynamic>
  );
}

export function IconButton(props: Readonly<ButtonProps>): JSX.Element {
  const [{ as, icon }, rest] = splitProps(props, ['as', 'icon']);
  return (
    <Dynamic component={defaultTo('button', as)} class={cx(buttonStyles())} {...rest}>
      {icon}
      {props.children}
    </Dynamic>
  );
}

// TODO: move elsewhere
export function ColorModeSwitcher(): JSX.Element {
  return (
    <IconButton
      aria-label="Theme to toggle dark mode"
      size={'small'}
      variant={'ghost'}
      onClick={toggleTheme}
      icon={getCurrentTheme() === 'light' ? <FiSun /> : <FiMoon />}
    />
  );
}
