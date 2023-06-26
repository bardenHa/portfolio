import { Heading as SHeading, HeadingProps as SHeadingProps, css } from '@hope-ui/solid';

const headingStyles = css({
  variants: {
    variant: {
      primary: {
        color: 'inherit',
      },
      secondary: {
        color: '$neutral11',
      },
    },
  },
});

interface HeadingProps extends Omit<SHeadingProps, 'size'> {
  size?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  variant?: 'primary' | 'secondary';
}

export const Heading = (props: HeadingProps) => {
  const { size, variant, ...rest } = props;
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
  const headingProps: SHeadingProps = {};

  switch (size) {
    case 'xxlarge': {
      headingProps.size = '5xl';
      headingProps.level = 1;
      break;
    }
    case 'xlarge': {
      headingProps.size = '4xl';
      headingProps.level = 2;
      break;
    }
    case 'large': {
      headingProps.size = '3xl';
      headingProps.level = 3;
      break;
    }
    case 'medium': {
      headingProps.size = '2xl';
      headingProps.level = 4;
      break;
    }
    case 'small': {
      headingProps.size = 'xl';
      headingProps.level = 5;
      break;
    }
    case 'xsmall': {
      headingProps.size = 'lg';
      headingProps.level = 6;
      break;
    }
    default: {
      headingProps.size = '2xl';
    }
  }

  return headingProps;
};
