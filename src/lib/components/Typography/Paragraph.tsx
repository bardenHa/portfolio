import { JSX } from 'solid-js';
// import type { VariantProps } from 'class-variance-authority';
// import { As } from '@kobalte/core';
// import { defaultTo } from 'rambda';

interface ParagraphBaseProps {
  test?: string;
  children?: JSX.Element;
}
// type ParagraphBaseProps = VariantProps<typeof paragraphtStyles>;
// const paragraphtStyles = cva('paragraph font-medium lineheight-todo', {
//   variants: {
//     size: {
//       large: {
//         fontSize: 'lg',
//         lineHeight: 'shorter',
//       },
//       medium: {
//         fontSize: 'base',
//         lineHeight: 'shorter',
//       },
//       small: {
//         fontSize: 'sm',
//         lineHeight: 'shorter',
//       },
//       xsmall: {
//         fontSize: 'xs',
//         lineHeight: 'shorter',
//       },
//     },
//     variant: {
//       default: {
//         color: 'contentPrimary',
//       },
//       subdued: {
//         color: 'contentSecondary',
//       },
//     },
//   },
// });

type SupportedIntrinsicElements = keyof JSX.IntrinsicElements;

interface ParagraphProps extends JSX.HTMLAttributes<HTMLParagraphElement>, ParagraphBaseProps {
  as?: SupportedIntrinsicElements;
}

export function Paragraph(props: Readonly<ParagraphProps>): JSX.Element {
  // const [{ variant, size }, rest] = splitProps(props, ['size', 'variant', 'as']);
  return (
    <p
    //  class={cx(paragraphtStyles({ variant, size }))}
    // {...rest}
    >
      {/* <As component={defaultTo('p', as)}> */}
      {props.children}
      {/* </As> */}
    </p>
  );
}
