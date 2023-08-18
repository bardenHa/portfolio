import { JSX, splitProps } from 'solid-js';
import { css, Heading as SHeading, HeadingProps as SHeadingProps } from '@hope-ui/solid';

const headingStyles = css({
  variants: {
    variant: {
      primary: {
        color: 'inherit',
      },
      secondary: {
        color: '$textSecondary',
      },
    },
  },
});

interface HeadingProps extends Omit<SHeadingProps, 'size'> {
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  variant?: 'primary' | 'secondary';
}

export const Heading = (props: HeadingProps): JSX.Element => {
  const [{ variant, size }, rest] = splitProps(props, ['size', 'variant']);

  return (
    <SHeading
      class={headingStyles({ variant })}
      fontWeight={'$bold'}
      lineHeight={'$normal'}
      {...getHeadingProps(size)}
      {...rest}
    >
      {props.children}
    </SHeading>
  );
};

const getHeadingProps = (size: HeadingProps['size']): SHeadingProps => {
  const headingProps: SHeadingProps = {
    size: {
      '@initial': 'xl',
      '@sm': '2xl',
    },
    level: 4,
  };

  switch (size) {
    case 'xxlarge': {
      headingProps.size = {
        '@initial': '4xl',
        '@sm': '5xl',
      };
      headingProps.level = 1;
      break;
    }
    case 'xlarge': {
      headingProps.size = {
        '@initial': '3xl',
        '@sm': '4xl',
      };
      headingProps.level = 2;
      break;
    }
    case 'large': {
      headingProps.size = {
        '@initial': '2xl',
        '@sm': '3xl',
      };
      headingProps.level = 3;
      break;
    }
    case 'medium': {
      break;
    }
    case 'small': {
      headingProps.size = {
        '@initial': 'lg',
        '@sm': 'xl',
      };
      headingProps.level = 5;
      break;
    }
    case 'xsmall': {
      headingProps.size = 'lg';
      headingProps.level = 6;
      break;
    }
    default: {
      break;
    }
  }

  return headingProps;
};
