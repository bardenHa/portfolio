import { createSignal, For } from 'solid-js';
import { Button, HStack, VStack, Grid, Divider, Anchor } from '@hope-ui/solid';
import { FiPlus, FiMinus } from 'solid-icons/fi';
import { Card, Typography } from '@/lib/components';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <VStack spacing={'$8'} alignItems={'start'}>
      <For each={['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall']}>
        {(size: any) => (
          <header>
            <Typography.Heading size={size} variant="secondary">
              {size}
            </Typography.Heading>
            <Typography.Label size={size}>Some label</Typography.Label>
            <Typography.Paragraph size={size}>Some paragraph</Typography.Paragraph>
          </header>
        )}
      </For>
      <VStack as={'section'} gap={'$5'} w={'100%'}>
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
            <Typography.Heading size={'large'}>A little bit about me.</Typography.Heading>
            <Divider margin={'$4 0'} />
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
            <Typography.Label size="xsmall" mt={'$5'} mb={'$2'} variant="secondary">
              WHAT'S NEXT
            </Typography.Label>
            <Typography.Paragraph variant="secondary" size="large">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rerum possimus, illum non cum
              voluptatum distinctio accusamus iste aliquam consequuntur assumenda doloremque ad quas.
            </Typography.Paragraph>
          </Card>
          <Card>Some card</Card>
        </Grid>
        <Grid
          templateColumns={{
            '@initial': '1fr',
            '@sm': 'repeat(2, 1fr)',
          }}
          gap={'$5'}
          w={'100%'}
          gridAutoRows={'350px'}
        >
          <Card>Some card</Card>
          <Card>Some card</Card>
          <Card>Some card</Card>
          <Card>Some card</Card>
          <Card gridColumn={'1 / 3'}>Some card</Card>
        </Grid>
      </VStack>
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
