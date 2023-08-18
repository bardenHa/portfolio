import type { Component } from 'solid-js';
import { useRoutes } from '@solidjs/router';

import { FullLayout } from './lib/layouts/FullLayout';
import { routes } from './routes';

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <FullLayout>
      <Route />
    </FullLayout>
  );
};

export default App;
