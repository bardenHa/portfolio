import { Divider as SDivider, DividerProps as SDividerProps } from '@hope-ui/solid';
import { splitProps } from 'solid-js';

interface DividerProps extends SDividerProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Divider = (props: DividerProps) => {
  const [{ size }, rest] = splitProps(props, ['size']);

  let margin: SDividerProps['margin'];

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
};
