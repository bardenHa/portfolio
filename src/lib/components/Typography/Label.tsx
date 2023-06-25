import { Text, TextProps } from '@hope-ui/solid';

interface LabelProps extends Omit<TextProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}

export const Label = (props: LabelProps) => {
  const { size, ...rest } = props;
  return (
    <Text
      aria-roledescription="A subtitle, short phrase or sentence that provides context or information about a specific block of text."
      fontWeight={'$medium'}
      lineHeight={'$normal'}
      {...getTextProps(size)}
      {...rest}
    >
      {props.children}
    </Text>
  );
};

const getTextProps = (size: LabelProps['size']): TextProps => {
  const labelProps: TextProps = {};

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
