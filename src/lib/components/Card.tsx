import { JSX } from 'solid-js';
import { Box, HTMLHopeProps } from '@hope-ui/solid';

interface CardProps {
  test?: string;
}

export function Card(props: Readonly<HTMLHopeProps<'section', CardProps>>): JSX.Element {
  return (
    <Box as={'section'} p={'$8'} borderRadius={'$xl'} bg={'$contentNeutralSecondary'} {...props}>
      {props.children}
    </Box>
  );
}
