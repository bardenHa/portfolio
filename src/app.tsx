import type { Component } from 'solid-js';
import { useRoutes } from '@solidjs/router';

import { routes } from './routes';
import { FullLayout } from './lib/layouts/FullLayout';

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <FullLayout>
      <Route />
    </FullLayout>
  );
};

export default App;
