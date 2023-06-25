import { Text, TextProps } from '@hope-ui/solid';

interface ParagraphProps extends Omit<TextProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}

export const Paragraph = (props: ParagraphProps) => {
  const { size, ...rest } = props;
  return (
    <Text lineHeight={'$base'} fontWeight={'$normal'} {...getTextProps(props.size)} {...rest}>
      {props.children}
    </Text>
  );
};

const getTextProps = (size: ParagraphProps['size']): TextProps => {
  const paragraphProps: TextProps = {};

  switch (size) {
    case 'large': {
      paragraphProps.size = 'lg';
      break;
    }
    case 'medium': {
      paragraphProps.size = 'base';
      break;
    }
    case 'small': {
      paragraphProps.size = 'sm';
      break;
    }
    case 'xsmall': {
      paragraphProps.size = 'xs';
      break;
    }
    default: {
      paragraphProps.size = 'base';
    }
  }

  return paragraphProps;
};
