import { createSignal } from 'solid-js';
import { Button, HStack, Heading, VStack, Text, Grid } from '@hope-ui/solid';
import { FiPlus, FiMinus } from 'solid-icons/fi';
import { Card } from '@/lib/components';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <VStack spacing={'$8'}>
      <div>
        <Heading as={'h2'}>Home</Heading>
        <Text>This is the home page.</Text>
      </div>
      <Grid
        templateColumns={{
          '@initial': '1fr',
          '@sm': 'repeat(2, 1fr)',
          '@md': 'repeat(3, 1fr)',
        }}
        gap={'$3'}
        w={'100%'}
      >
        <Card>Some card</Card>
        <Card>Some card</Card>
        <Card>Some card</Card>
      </Grid>
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
