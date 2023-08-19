import { JSX, splitProps } from 'solid-js';
import { Divider as SDivider, DividerProps as SDividerProps } from '@hope-ui/solid';

interface DividerProps extends SDividerProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Divider(props: DividerProps): JSX.Element {
  const [{ size }, rest] = splitProps(props, ['size']);

  let margin: SDividerProps['margin'] = '$8 0';

  switch (size) {
    case 'sm':
      margin = '$4 0';
      break;
    case 'md':
      break;
    case 'lg':
      margin = '$12 0';
      break;
    default:
      break;
  }

  return (
    <SDivider margin={margin} {...rest}>
      {props.children}
    </SDivider>
  );
}
