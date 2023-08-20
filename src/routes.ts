import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/blog',
    component: lazy(() => import('./pages/blog')),
  },
  {
    path: '/blog/:id',
    component: lazy(() => import('./pages/blog/post')),
  },
  {
    path: '**',
    component: lazy(() => import('./pages/404')),
  },
];
