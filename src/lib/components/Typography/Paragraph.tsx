import { JSX, splitProps } from 'solid-js';
import { css, Text, TextProps } from '@hope-ui/solid';

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

export const Paragraph = (props: ParagraphProps): JSX.Element => {
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
