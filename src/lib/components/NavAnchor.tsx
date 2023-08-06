import { Anchor, AnchorProps, css } from '@hope-ui/solid';
import { splitProps } from 'solid-js';

interface NavAnchorProps extends AnchorProps {
  variant?: 'subtle';
}

const anchorStyles = css({
  variants: {
    variant: {
      subtle: {
        color: '$neutral10',
        transition: 'color 0.25s ease-in-out',
        _hover: {
          textDecoration: 'none',
          color: '$neutral12',
        },
        _active: {
          textDecoration: 'none',
          color: '$neutral12',
        },
        _focus: {
          textDecoration: 'none',
          color: '$neutral12',
        },
      },
    },
  },
});

export const NavAnchor = (props: NavAnchorProps) => {
  const [{ variant }, rest] = splitProps(props, ['variant']);

  return (
    <Anchor class={anchorStyles({ variant })} {...rest}>
      {props.children}
    </Anchor>
  );
};
