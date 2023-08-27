import { JSX, Show } from 'solid-js';

export default function NotFound(): JSX.Element {
  return (
    <section>
      <h1>Post: </h1>
      <p>It's gone 😞</p>
      <Show when={'sodm'} fallback={<p>It's not sodm</p>}>
        <p>It's sodm 😞</p>
      </Show>
    </section>
  );
}
