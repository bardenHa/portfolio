import { Heading, HeadingProps } from '@hope-ui/solid';
import { JSX, splitProps } from 'solid-js';

interface DisplayProps extends Omit<HeadingProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}

export const Display = (props: DisplayProps): JSX.Element => {
  const [{ size }, rest] = splitProps(props, ['size']);

  return (
    <Heading fontWeight={'$bold'} lineHeight={'$shorter'} letterSpacing={'$tight'} {...getHeadingProps(size)} {...rest}>
      {props.children}
    </Heading>
  );
};

const getHeadingProps = (size: DisplayProps['size']): HeadingProps => {
  const displayProps: HeadingProps = {
    size: {
      '@initial': '4xl',
      '@sm': '6xl',
    },
  };

  switch (size) {
    case 'large': {
      displayProps.size = { '@initial': '6xl', '@sm': '8xl' };
      break;
    }
    case 'medium': {
      break;
    }
    case 'small': {
      displayProps.size = { '@initial': '3xl', '@sm': '5xl' };
      break;
    }
    case 'xsmall': {
      displayProps.size = { '@initial': '2xl', '@sm': '4xl' };
      break;
    }
    default: {
      break;
    }
  }

  return displayProps;
};
