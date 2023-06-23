import { Box, HTMLHopeProps } from '@hope-ui/solid';

interface CardProps {
  test?: string;
}

export const Card = (props: HTMLHopeProps<'div', CardProps>) => {
  return (
    <Box as={'section'} p={'$8'} borderRadius={'$lg'} bg={'$contentNeutralSecondary'} {...props}>
      {props.children}
    </Box>
  );
};
