import { JSX, splitProps } from 'solid-js';
import { css, Text, TextProps } from '@hope-ui/solid';
import { defaultTo } from 'rambda';

const labelStyles = css({
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

interface LabelProps extends Omit<TextProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
  variant?: 'primary' | 'secondary';
}

export function Label(props: LabelProps): JSX.Element {
  const [{ variant, size }, rest] = splitProps(props, ['size', 'variant']);

  return (
    <Text
      class={labelStyles({ variant: defaultTo('primary', variant) })}
      aria-roledescription="A subtitle, short phrase or sentence that provides context or information about a specific block of text."
      fontWeight={'$medium'}
      lineHeight={'$normal'}
      {...getTextProps(size)}
      {...rest}
    >
      {props.children}
    </Text>
  );
}

function getTextProps(size: LabelProps['size']): TextProps {
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
}
