import { Box, Button, Container, Flex, Heading, useColorMode } from '@hope-ui/solid';
import { ParentComponent } from 'solid-js';

export const FullLayout: ParentComponent = props => {
  return (
    <Box
      as="section"
      d={'flex'}
      flexDirection={'column'}
      minH={'$screenH'}
      h={'$screenH'}
      overflow={'hidden'}
      bg={'$neutral1'}
    >
      <Container
        as={'header'}
        p={'$5'}
        borderColor={'$neutral5'}
        borderBottomWidth={'thin'}
        transition={'max-width ease-in-out 200ms'}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Heading as={'h1'}>Header</Heading>
          <ColorModeSwitcher />
        </Flex>
      </Container>
      <Container as={'main'} p={'$5'} flex={1} transition={'max-width ease-in-out 200ms'}>
        {props.children}
      </Container>
      <Container
        as={'footer'}
        p={'$5'}
        borderColor={'$neutral5'}
        borderTopWidth={'thin'}
        transition={'max-width ease-in-out 200ms'}
      >
        <p>Footer</p>
      </Container>
    </Box>
  );
};

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Button onClick={toggleColorMode}>Toggle {colorMode() === 'light' ? 'dark' : 'light'}</Button>;
}
