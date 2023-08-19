import type { JSX } from 'solid-js';
import { useRoutes } from '@solidjs/router';

import { FullLayout } from './lib/layouts/FullLayout';
import { routes } from './routes';

function Routes(): JSX.Element {
  return useRoutes(routes)();
}

function App(): JSX.Element {
  return (
    <FullLayout>
      <Routes />
    </FullLayout>
  );
}

export default App;
