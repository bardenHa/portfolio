import { HTMLHopeProps, Heading, HeadingProps } from '@hope-ui/solid';

interface DisplayProps extends Omit<HeadingProps, 'size'> {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}

export const Display = (props: DisplayProps) => {
  const { size, ...rest } = props;
  return (
    <Heading {...getDisplayProps(props.size)} {...rest}>
      {props.children}
    </Heading>
  );
};

const getDisplayProps = (size: DisplayProps['size']): HeadingProps => {
  const displayProps: HeadingProps = {};
  switch (size) {
    case 'large':
      displayProps.size = '2xl';
      displayProps.lineHeight = '3xl';
    case 'medium':
      displayProps.size = 'xl';
      displayProps.lineHeight = '2xl';
    case 'small':
      displayProps.size = 'lg';
      displayProps.lineHeight = 'xl';
    case 'xsmall':
      displayProps.size = 'base';
      displayProps.lineHeight = 'lg';
    default:
      displayProps.size = 'base';
      displayProps.lineHeight = 'lg';
  }

  return displayProps;
};
