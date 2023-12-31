import { JSX, Show, splitProps } from 'solid-js';
import { cva, cx, type VariantProps } from 'class-variance-authority';

import { Typography } from './typography';

const imageStyles = cva(['Image', 'border-content-neutral-secondary'], {
  variants: {
    center: {
      true: ['mx-auto'],
      false: [],
    },
  },
});

type ImageBaseProps = VariantProps<typeof imageStyles>;
export interface ImageProps extends JSX.ImgHTMLAttributes<HTMLImageElement>, ImageBaseProps {
  alt: string;
  caption?: string;
  showCaption?: boolean;
  containerClass?: string;
  center?: boolean;
}

export function Image(props: Readonly<ImageProps>): JSX.Element {
  const [{ alt, class: className, containerClass, showCaption, caption, center }, rest] = splitProps(props, [
    'alt',
    'class',
    'containerClass',
    'showCaption',
    'caption',
    'center',
  ]);
  const image = (
    <img class={cx(imageStyles({ center }), className)} alt={alt} decoding="async" loading="lazy" {...rest} />
  );
  return (
    <Show when={showCaption} fallback={image}>
      <figure class={cx(center ? 'block' : 'inline-block', containerClass)}>
        <img class={cx(imageStyles({ center }), className)} alt={alt} decoding="async" loading="lazy" {...rest} />
        <figcaption class="mt-2 text-center italic">
          <small>
            <Typography.Text variant="subdued">{caption ?? alt}</Typography.Text>
          </small>
        </figcaption>
      </figure>
    </Show>
  );
}
