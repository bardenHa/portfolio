import './index.css';

import { render } from 'solid-js/web';
import { HopeProvider } from '@hope-ui/solid';
import { Router } from '@solidjs/router';

import App from './app';
import { config } from './lib/theme';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  );
}

if (!root) {
  throw new Error('Root element not found. Did you forget to add it to your index.html?');
}

render(
  () => (
    <Router>
      <HopeProvider config={config}>
        <App />
      </HopeProvider>
    </Router>
  ),
  root
);
