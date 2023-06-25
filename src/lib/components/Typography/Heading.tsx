import { Heading as SHeading, HeadingProps as SHeadingProps } from '@hope-ui/solid';

interface HeadingProps extends Omit<SHeadingProps, 'size'> {
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
}

export const Heading = (props: HeadingProps) => {
  const { size, ...rest } = props;
  return (
    <SHeading fontWeight={'$bold'} lineHeight={'$normal'} {...getHeadingProps(props.size)} {...rest}>
      {props.children}
    </SHeading>
  );
};

const getHeadingProps = (size: HeadingProps['size']): SHeadingProps => {
  const headingProps: SHeadingProps = {};

  switch (size) {
    case 'xxlarge': {
      headingProps.size = '5xl';
      break;
    }
    case 'xlarge': {
      headingProps.size = '4xl';
      break;
    }
    case 'large': {
      headingProps.size = '3xl';
      break;
    }
    case 'medium': {
      headingProps.size = '2xl';
      break;
    }
    case 'small': {
      headingProps.size = 'xl';
      break;
    }
    case 'xsmall': {
      headingProps.size = 'lg';
      break;
    }
    default: {
      headingProps.size = '2xl';
    }
  }

  return headingProps;
};
