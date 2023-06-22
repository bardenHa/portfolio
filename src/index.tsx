import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './app';
import { HopeProvider } from '@hope-ui/solid';
import { config } from './lib/theme';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  );
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
