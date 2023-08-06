import { Anchor, AnchorProps, css } from '@hope-ui/solid';
import { splitProps } from 'solid-js';

interface NavAnchorProps extends AnchorProps {
  variant?: 'subtle' | 'distinguished';
  colorScheme?: 'neutral' | 'primary';
}

const anchorStyles = css({
  transition: 'color 0.25s ease-in-out',
  fontWeight: '$medium',
  variants: {
    variant: {
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
    // Subtle
    {
      variant: 'subtle',
      colorScheme: 'primary',
      css: {
        _hover: {
          color: '$primary12',
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

export const NavAnchor = (props: NavAnchorProps) => {
  const [{ variant, colorScheme }, rest] = splitProps(props, ['variant', 'colorScheme']);

  return (
    <Anchor class={anchorStyles({ variant, colorScheme })} {...rest}>
      {props.children}
    </Anchor>
  );
};
