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
