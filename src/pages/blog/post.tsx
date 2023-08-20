import { JSX, Show } from 'solid-js';
import { useParams } from '@solidjs/router';

export default function NotFound(): JSX.Element {
  const params = useParams<{
    id: string;
  }>();

  return (
    <section>
      <h1>Post: {params.id}</h1>
      <p>It's gone 😞</p>
      <Show when={params.id === 'sodm'} fallback={<p>It's not sodm</p>}>
        <p>It's sodm 😞</p>
      </Show>
    </section>
  );
}
