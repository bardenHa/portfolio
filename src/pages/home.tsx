import { createSignal, For } from 'solid-js';
import { Button, HStack, VStack, Grid } from '@hope-ui/solid';
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
          templateRows={'350px'}
        >
          <Card>Some card</Card>
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
