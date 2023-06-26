import { Text, TextProps, css } from '@hope-ui/solid';
import { splitProps } from 'solid-js';

const paragraphtStyles = css({
  variants: {
    variant: {
      primary: {
        color: 'inherit',
      },
      secondary: {
        color: '$neutral10',
      },
    },
  },
});

interface ParagraphProps extends Omit<TextProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
  variant?: 'primary' | 'secondary';
}

export const Paragraph = (props: ParagraphProps) => {
  const [{ variant, size }, rest] = splitProps(props, ['size', 'variant']);
  return (
    <Text
      class={paragraphtStyles({
        variant,
      })}
      lineHeight={'$base'}
      fontWeight={'$normal'}
      {...getTextProps(size)}
      {...rest}
    >
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
