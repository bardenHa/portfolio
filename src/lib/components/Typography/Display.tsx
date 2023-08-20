import { JSX, splitProps } from 'solid-js';
import { Heading, HeadingProps } from '@hope-ui/solid';
import { defaultTo } from 'rambda';

const HEADING_SIZE = {
  large: { '@initial': '6xl', '@sm': '8xl' },
  medium: { '@initial': '4xl', '@sm': '6xl' },
  small: { '@initial': '3xl', '@sm': '5xl' },
  xsmall: { '@initial': '2xl', '@sm': '4xl' },
} as const;

interface DisplayProps extends Omit<HeadingProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}

export function Display(props: Readonly<DisplayProps>): JSX.Element {
  const [{ size }, rest] = splitProps(props, ['size']);

  return (
    <Heading
      fontWeight={'$bold'}
      lineHeight={'$shorter'}
      letterSpacing={'$tight'}
      size={HEADING_SIZE[defaultTo('medium', size)]}
      {...rest}
    >
      {props.children}
    </Heading>
  );
}
