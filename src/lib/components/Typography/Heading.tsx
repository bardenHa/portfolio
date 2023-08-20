// import { JSX, splitProps } from 'solid-js';
// import { css, Heading as SHeading, HeadingProps as SHeadingProps } from '@hope-ui/solid';
// import { defaultTo } from 'rambda';

// const headingStyles = css({
//   variants: {
//     variant: {
//       primary: {
//         color: 'inherit',
//       },
//       secondary: {
//         color: '$textSecondary',
//       },
//     },
//   },
// });

// const HEADING_SIZE = {
//   xxlarge: { '@initial': '4xl', '@sm': '5xl' },
//   xlarge: { '@initial': '3xl', '@sm': '4xl' },
//   large: { '@initial': '2xl', '@sm': '3xl' },
//   medium: { '@initial': 'xl', '@sm': '2xl' },
//   small: { '@initial': 'lg', '@sm': 'xl' },
//   xsmall: 'lg',
// } as const;

// const HEADING_SIZE_LEVEL = {
//   xxlarge: 1,
//   xlarge: 2,
//   large: 3,
//   medium: 4,
//   small: 5,
//   xsmall: 6,
// } as const;

// interface HeadingProps extends Omit<SHeadingProps, 'size'> {
//   size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
//   variant?: 'primary' | 'secondary';
// }

// export function Heading(props: Readonly<HeadingProps>): JSX.Element {
//   const [{ variant, size }, rest] = splitProps(props, ['size', 'variant']);
//   const calculatedSize = defaultTo('medium', size);

//   return (
//     <SHeading
//       class={headingStyles({ variant: defaultTo('primary', variant) })}
//       fontWeight={'$bold'}
//       lineHeight={'$normal'}
//       size={HEADING_SIZE[calculatedSize]}
//       level={HEADING_SIZE_LEVEL[calculatedSize]}
//       {...rest}
//     >
//       {props.children}
//     </SHeading>
//   );
// }
