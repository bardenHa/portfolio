import { JSX, splitProps } from 'solid-js';
import { Dynamic, DynamicProps } from 'solid-js/web';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { defaultTo } from 'rambda';

type ParagraphBaseProps = VariantProps<typeof paragraphtStyles>;
const paragraphtStyles = cva('paragraph font-medium lineheight-todo', {
  variants: {
    size: {
      large: {
        fontSize: 'lg',
        lineHeight: 'shorter',
      },
      medium: {
        fontSize: 'base',
        lineHeight: 'shorter',
      },
      small: {
        fontSize: 'sm',
        lineHeight: 'shorter',
      },
      xsmall: {
        fontSize: 'xs',
        lineHeight: 'shorter',
      },
    },
    variant: {
      default: {
        color: 'contentPrimary',
      },
      subdued: {
        color: 'contentSecondary',
      },
    },
  },
});

interface ParagraphProps extends JSX.HTMLAttributes<HTMLParagraphElement>, ParagraphBaseProps {
  as?: RelevantTags;
}

export function Paragraph(props: Readonly<ParagraphProps>): JSX.Element {
  const [{ variant, size, as }, rest] = splitProps(props, ['size', 'variant', 'as']);
  return (
    <Dynamic component={defaultTo('p', as)} class={cx(paragraphtStyles({ variant, size }))} {...rest}>
      {props.children}
    </Dynamic>
  );
}

type RelevantTags = Exclude<
  keyof JSX.IntrinsicElements,
  | 'script'
  | 'object'
  | 'style'
  | 'head'
  | 'animate'
  | 'animateMotion'
  | 'animateTransform'
  | 'feDistantLight'
  | 'feFuncA'
  | 'feFuncB'
  | 'feFuncG'
  | 'feFuncR'
  | 'feMergeNode'
  | 'fePointLight'
  | 'feSpotLight'
  | 'metadata'
  | 'view'
  | 'symbol'
>;

type BoxAttributes = JSX.HTMLAttributes<HTMLDivElement> & {
  as?: RelevantTags;
};

export type BoxProps<T = object> = Omit<DynamicProps<RelevantTags, BoxAttributes & T>, 'component'>;

// eslint-disable-next-line func-style, functional/prefer-immutable-types, @typescript-eslint/explicit-function-return-type
export const Paragraph2 = (props: BoxProps) => {
  const [local, rest] = splitProps(props, ['as', 'children']);

  return (
    <Dynamic component={local.as ?? 'div'} {...rest}>
      {local.children}
    </Dynamic>
  );
};
