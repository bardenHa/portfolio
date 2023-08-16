import { VStack, Box } from '@hope-ui/solid';
import { Divider, Typography } from '@/lib/components';

export default function Home() {
  return (
    <VStack alignItems={'start'}>
      <Box as="section" mt={'$12'} id="intro">
        <Typography.Display size="medium" level={1}>
          The blog 📚
        </Typography.Display>
        <Typography.Paragraph size="large" variant="secondary" mt={'$16'}>
          Writing about web development, tooling, linux and developer productivity.
        </Typography.Paragraph>
      </Box>
      <Divider size="lg" />
    </VStack>
  );
}
