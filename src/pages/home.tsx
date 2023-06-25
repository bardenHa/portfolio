import { createSignal } from 'solid-js';
import { Button, HStack, Heading, VStack, Text, Grid, Box } from '@hope-ui/solid';
import { FiPlus, FiMinus } from 'solid-icons/fi';
import { Card } from '@/lib/components';
import { Display } from '@/lib/components/Typography';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <VStack spacing={'$8'}>
      {['large', 'medium', 'small', 'xsmall'].map((size: any) => (
        <Display level={1} size={size}>
          Some display
        </Display>
      ))}
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
