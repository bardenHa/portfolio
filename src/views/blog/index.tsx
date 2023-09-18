import { JSX } from 'solid-js';

import { Divider, Typography } from '@/lib/components';

export function Blogs(): JSX.Element {
  return (
    <div>
      <section class="mt-12">
        <Typography.Display>My blog 📚</Typography.Display>
        <Typography.Paragraph size="large" variant="subdued" class="mt-16">
          Writing about web development, tooling, linux and developer productivity.
        </Typography.Paragraph>
      </section>
      <Divider size="large" />
      <section class="mt-12" aria-labelledby="latest-posts">
        <Typography.Heading size={'large'} id="latest-posts">
          Latest posts
        </Typography.Heading>
      </section>
    </div>
  );
}
