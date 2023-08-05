import { Anchor, Box, Container, Flex, IconButton, Image, useColorMode } from '@hope-ui/solid';
import { FiMoon, FiSun } from 'solid-icons/fi';
import { ParentComponent } from 'solid-js';
import { Divider, NavAnchor, Typography } from '../components';
import { Link } from '@solidjs/router';

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
      <Container as={'header'} p={'$5'} transition={'max-width ease-in-out 200ms'} id="top">
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Link href="/">
            <Image src="/h_avatar.svg" w={32} h={32} alt="Harry's avatar" />
          </Link>
          <Flex
            gap={'$6'}
            display={{
              '@initial': 'none',
              '@md': 'flex',
            }}
          >
            <Flex as={'nav'} alignItems={'center'} gap={'$4'}>
              <NavAnchor active href={'#about'}>
                About
              </NavAnchor>
              <NavAnchor href={'#projects'}>Projects</NavAnchor>
              <NavAnchor href={'#blog'}>Blog</NavAnchor>
              <NavAnchor href={'#contact'}>Contact</NavAnchor>
            </Flex>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
      <Container as={'main'} p={'$5'} flex={1} transition={'max-width ease-in-out 200ms'}>
        {props.children}
      </Container>
      <Container as={'footer'} p={'$5'} transition={'max-width ease-in-out 200ms'}>
        <Divider size="lg" />
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Typography.Paragraph size="small" variant="secondary">
            © 2023 Harry Barden
          </Typography.Paragraph>
          <Anchor href={'#top'}>Back to top</Anchor>
        </Flex>
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
