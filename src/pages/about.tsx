import { createEffect, Suspense } from 'solid-js';
import { useRouteData } from '@solidjs/router';
import type { AboutDataType } from './about.data';

export default function About() {
  const name = useRouteData<AboutDataType>();

  createEffect(() => {
    console.log(name());
  });

  return (
    <section>
      <h1>About</h1>
      <p>A page all about this website.</p>
      <p>
        <span>We love</span>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{name()}</span>
        </Suspense>
      </p>
    </section>
  );
}
