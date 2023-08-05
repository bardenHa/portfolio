import { Anchor, AnchorProps } from '@hope-ui/solid';
import { splitProps } from 'solid-js';

interface NavAnchorProps extends AnchorProps {
  active?: boolean;
}

export const NavAnchor = (props: NavAnchorProps) => {
  const [{ active }, rest] = splitProps(props, ['active']);

  return (
    <Anchor color={!active ? '$neutral10' : undefined} fontWeight={'$medium'} {...rest}>
      {props.children}
    </Anchor>
  );
};
