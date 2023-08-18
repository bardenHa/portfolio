import { Anchor as SAnchor, AnchorProps as SAnchorProps, css } from '@hope-ui/solid';
import { JSX, splitProps } from 'solid-js';

interface NavAnchorProps extends SAnchorProps {
  variant?: 'subtle' | 'distinguished' | 'natural';
  colorScheme?: 'neutral' | 'primary';
}

const anchorStyles = css({
  transition: 'color 0.25s ease-in-out',
  fontWeight: '$medium',
  defaultVariants: {
    variant: 'natural',
    colorScheme: 'primary',
  },
  variants: {
    variant: {
      natural: {},
      subtle: {
        color: '$neutral10',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
          color: '$neutral12',
        },
      },
      distinguished: {
        transition: 'all 0.25s ease 0s !important',
        fontWeight: 'inherit',
        textDecoration: 'none',
        color: 'inherit',
        background: `linear-gradient(to right, $neutral10, $neutral10) 100% 100% / 100% 0.05em no-repeat, linear-gradient(to right, $neutral12, $neutral12) 0px 100% / 0px 0.05em;
      background`,
        backgroundPosition: '100% 100% 0px 100%',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '0.15rem',
        px: '0.05rem',
        _hover: {
          textDecoration: 'none',
          backgroundSize: '0px 0.05em, 100% 0.05em',
          color: '$neutral10',
        },
      },
    },
    colorScheme: {
      primary: {},
      neutral: {},
    },
  },
  compoundVariants: [
    // Natural
    {
      variant: 'natural',
      colorScheme: 'neutral',
      css: {
        color: '$neutral12',
      },
    },
    {
      variant: 'natural',
      colorScheme: 'primary',
      css: {
        color: '$primary10',
      },
    },
    // Subtle
    {
      variant: 'subtle',
      colorScheme: 'primary',
      css: {
        _hover: {
          color: '$primary10',
        },
      },
    },
    // Distinguished
    {
      variant: 'distinguished',
      colorScheme: 'primary',
      css: {
        _hover: {
          color: '$primary10',
        },
      },
    },
  ],
});

export const Anchor = (props: NavAnchorProps): JSX.Element => {
  const [{ variant, colorScheme }, rest] = splitProps(props, ['variant', 'colorScheme']);

  return (
    <SAnchor class={anchorStyles({ variant, colorScheme })} {...rest}>
      {props.children}
    </SAnchor>
  );
};
