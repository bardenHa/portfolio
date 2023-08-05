import { createSignal } from 'solid-js';
import { Button, HStack, VStack, Grid, Anchor, Box, Image, IconButton } from '@hope-ui/solid';
import { FiPlus, FiMinus, FiTwitter, FiInstagram, FiGithub } from 'solid-icons/fi';
import { Card, Divider, Typography } from '@/lib/components';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <VStack spacing={'$8'} alignItems={'start'}>
      <Box as="section" mt={'$12'} id="intro">
        <Typography.Display size="medium">
          Software Engineer creating thoughtful, accessible & intuitive interfaces 🤟🏼
        </Typography.Display>
        <Typography.Paragraph size="large" variant="secondary" mt={'$16'}>
          I’m Harry Barden, a UK based Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas explicabo,
          expedita sed pariatur aliquam inventore voluptas. Dolor facilis quam quia sit amet consectetur adipisicing
          elit. Praesentium.
        </Typography.Paragraph>
        <br />
        <Typography.Paragraph size="large" variant="secondary">
          I specialise in interface design for web-based applications with a focus on simplicity & usability.
        </Typography.Paragraph>
        <HStack mt={'$16'} gap={'$2'}>
          <IconButton
            colorScheme={'neutral'}
            variant={'ghost'}
            icon={<FiTwitter />}
            aria-label="Twitter logo"
            fontSize={'$xl'}
          />
          <IconButton
            colorScheme={'neutral'}
            variant={'ghost'}
            icon={<FiInstagram />}
            aria-label="Twitter logo"
            fontSize={'$xl'}
          />
          <IconButton
            colorScheme={'neutral'}
            variant={'ghost'}
            icon={<FiGithub />}
            aria-label="Twitter logo"
            fontSize={'$xl'}
          />
          <Button ml={'$6'} colorScheme={'neutral'} variant={'subtle'}>
            Email me
          </Button>
        </HStack>
      </Box>
      <Divider size="lg" />
      <VStack as={'section'} gap={'$5'} w={'100%'} alignItems={'start'} id="about">
        <Typography.Heading size={'large'}>A little bit about me.</Typography.Heading>
        <Grid
          templateColumns={{
            '@initial': '1fr',
            '@sm': '2fr 1fr',
          }}
          gap={'$5'}
          w={'100%'}
          templateRows={'minmax(350px, 1fr)'}
        >
          <Card>
            <Typography.Label size="xsmall" mb={'$2'} variant="secondary">
              WHERE I'M FROM
            </Typography.Label>
            <Typography.Paragraph variant="secondary" size="large">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas explicabo, expedita sed pariatur aliquam
              inventore voluptas facilis quam quia tempora ut, minima corrupti! Tenetur doloribus reiciendis dicta,
              quasi sunt temporibus neque explicabo quis quia cum impedit perferendis voluptas debitis maxime dolor?
            </Typography.Paragraph>
            <Typography.Label size="xsmall" mt={'$5'} mb={'$2'} variant="secondary">
              WHAT I USED TO DO
            </Typography.Label>
            <Typography.Paragraph variant="secondary" size="large">
              I'm a software engineer with a passion for building beautiful, functional, and accessible user interfaces.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography.Paragraph>
            <Typography.Label size="xsmall" mt={'$5'} mb={'$2'} variant="secondary">
              WHAT I DO NOW
            </Typography.Label>
            <Typography.Paragraph variant="secondary" size="large">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur{' '}
              <Anchor href="https://example.com" external color={'$neutral12'} fontWeight={'$medium'}>
                Pledge
              </Anchor>
              .
            </Typography.Paragraph>
          </Card>
          <Image
            src="/me.jpeg" // TODO: choose new higher res image
            alt="Harry Barden portrait"
            h={'100%'}
            objectFit={'cover'}
            flexShrink={0}
            borderRadius={'$2xl'}
            overflow={'hidden'}
          />
        </Grid>
      </VStack>
      <Divider size="lg" />
      <Box as="section" w={'100%'} id="featured-projects">
        <Typography.Heading size={'large'}>Featured projects</Typography.Heading>
        <Typography.Paragraph variant="secondary">
          A collection of some side projects that have shipped recently.
        </Typography.Paragraph>
        <Grid
          templateColumns={{
            '@initial': '1fr',
            '@sm': 'repeat(2, 1fr)',
          }}
          gap={'$5'}
          w={'100%'}
          gridAutoRows={'200px'}
          mt={'$8'}
        >
          <Card gridColumn={'1 / 3'}>Some card</Card>
          <Card>Some card</Card>
          <Card>Some card</Card>
          <Card>Some card</Card>
          <Card>Some card</Card>
        </Grid>
      </Box>
      <HStack spacing={'$3'}>
        <Button variant={'subtle'} onClick={() => setCount(count() - 1)} rightIcon={<FiMinus />}>
          Decrement
        </Button>
        <output>Count: {count()}</output>
        <Button onClick={() => setCount(count() + 1)} rightIcon={<FiPlus />}>
          Increment
        </Button>
      </HStack>
    </VStack>
  );
}
