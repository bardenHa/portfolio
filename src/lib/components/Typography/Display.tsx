import { Heading, HeadingProps } from '@hope-ui/solid';
import { splitProps } from 'solid-js';

interface DisplayProps extends Omit<HeadingProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}

export const Display = (props: DisplayProps) => {
  const [{ size }, rest] = splitProps(props, ['size']);

  return (
    <Heading fontWeight={'$bold'} lineHeight={'$normal'} {...getHeadingProps(size)} {...rest}>
      {props.children}
    </Heading>
  );
};

const getHeadingProps = (size: DisplayProps['size']): HeadingProps => {
  const displayProps: HeadingProps = {};

  switch (size) {
    case 'large': {
      displayProps.size = '8xl';
      break;
    }
    case 'medium': {
      displayProps.size = '6xl';
      break;
    }
    case 'small': {
      displayProps.size = '5xl';
      break;
    }
    case 'xsmall': {
      displayProps.size = '4xl';
      break;
    }
    default: {
      displayProps.size = '6xl';
    }
  }

  return displayProps;
};
