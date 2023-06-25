import { Anchor, Box, Container, Flex, Heading, IconButton, useColorMode } from '@hope-ui/solid';
import { FiMoon, FiSun } from 'solid-icons/fi';
import { ParentComponent } from 'solid-js';

export const FullLayout: ParentComponent = props => {
  return (
    <Box
      as="section"
      d={'flex'}
      flexDirection={'column'}
      minH={'$screenH'}
      h={'$screenH'}
      overflowX={'hidden'}
      bg={'$contentNeutral'}
    >
      <Container as={'header'} p={'$5'} transition={'max-width ease-in-out 200ms'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Heading level={1} fontWeight={'$medium'}>
            Harry Barden
          </Heading>
          <Flex
            gap={'$6'}
            display={{
              '@initial': 'none',
              '@md': 'flex',
            }}
          >
            <Flex as={'nav'} alignItems={'center'} gap={'$4'}>
              <Anchor href={'#about'}>About</Anchor>
              <Anchor href={'#projects'}>Projects</Anchor>
              <Anchor href={'#contact'}>Contact</Anchor>
            </Flex>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
      <Container as={'main'} p={'$5'} flex={1} transition={'max-width ease-in-out 200ms'}>
        {props.children}
      </Container>
      <Container
        as={'footer'}
        p={'$5'}
        borderColor={'$borderNeutral'}
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
  return (
    <IconButton
      aria-label="Theme to toggle dark mode"
      size={'sm'}
      variant={'ghost'}
      onClick={toggleColorMode}
      icon={colorMode() === 'light' ? <FiSun /> : <FiMoon />}
    />
  );
}
