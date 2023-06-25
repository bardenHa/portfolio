import { Heading, HeadingProps } from '@hope-ui/solid';

interface LabelProps extends Omit<HeadingProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}

export const Label = (props: LabelProps) => {
  const { size, ...rest } = props;
  return (
    <Heading as="p" fontWeight={'$medium'} lineHeight={'$normal'} {...getHeadingProps(props.size)} {...rest}>
      {props.children}
    </Heading>
  );
};

const getHeadingProps = (size: LabelProps['size']): HeadingProps => {
  const labelProps: HeadingProps = {};

  switch (size) {
    case 'large': {
      labelProps.size = 'lg';
      break;
    }
    case 'medium': {
      labelProps.size = 'base';
      break;
    }
    case 'small': {
      labelProps.size = 'sm';
      break;
    }
    case 'xsmall': {
      labelProps.size = 'xs';
      break;
    }
    default: {
      labelProps.size = 'base';
    }
  }

  return labelProps;
};
